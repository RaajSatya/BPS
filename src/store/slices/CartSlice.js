import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MyApi from "../../api/MyApi";


const header = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    }
};

export const getMyCart = createAsyncThunk('getMyCart', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const res = await MyApi.get(`user/get_my_Cart`, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const addToCart = createAsyncThunk('addToCartsssss', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post('user/add_to_cart', data, header)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const incrementCartQtyFromServer = createAsyncThunk('incrementCartItem', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post(`user/increment_qty/${data.id}`, header)
        return data.id
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const decrementCartProductFromServer = createAsyncThunk('decrementCartItem', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post(`user/decrement_qty/${data.id}`, header)
        return data.id
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const deleteCartProductFromServer = createAsyncThunk('', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post(`user/delete_cart_item/${data.id}`, header)
        return data.id
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const removeAllCartFromServer = createAsyncThunk('removeCartAllFromSe', async (_, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const res = await MyApi.post(`user/remove_all_cart`, _, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})


const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: {
        carts: [],
        cart: {},
        error: null,
        cartLoading: false,
        loading: false,
        isAdded: false,
        isUpdated: false
    },
    reducers: {
        incrementQty(state, action) {
            let tempData = state.carts
            tempData.map((item) => {
                if (item.id == action?.payload) {
                    item.qty = item.qty + 1
                }
            })
            state.carts = tempData
        },
        decrementQty(state, action) {
            let tempData = state.carts
            tempData.map((item) => {
                if (item.id == action?.payload) {
                    item.qty = item.qty - 1
                }
            })
            state.carts = tempData
        },
        deleteCartProduct(state, action) {
            let tempData = state.carts
            let PIndex = tempData.findIndex((item) => item.id == action?.payload)
            tempData.splice(PIndex, 1)
            state.carts = tempData
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getMyCart.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getMyCart.fulfilled, (state, action) => {
            state.carts = action.payload.data;
            state.loading = false;
        });
        builder.addCase(getMyCart.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false;
        });
        // addToCart Case
        builder.addCase(addToCart.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.carts.push(action.payload.data)
            state.isAdded = true;
            state.error = null;
            state.loading = false;
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isAdded = false;
            state.error = action.payload;
            state.loading = false;
        });

        // Increment Cart item
        builder.addCase(incrementCartQtyFromServer.pending, (state, action) => {

        });
        builder.addCase(incrementCartQtyFromServer.fulfilled, (state, action) => {

        });
        builder.addCase(incrementCartQtyFromServer.rejected, (state, action) => {
            state.error = action?.payload
        });

        // Decrement Cart item
        builder.addCase(decrementCartProductFromServer.pending, (state, action) => {

        });
        builder.addCase(decrementCartProductFromServer.fulfilled, (state, action) => {

        });
        builder.addCase(decrementCartProductFromServer.rejected, (state, action) => {
            state.error = action?.payload
        });

        // Delete Cart item
        builder.addCase(deleteCartProductFromServer.pending, (state, action) => {

        });
        builder.addCase(deleteCartProductFromServer.fulfilled, (state, action) => {

        });
        builder.addCase(deleteCartProductFromServer.rejected, (state, action) => {
            state.error = action?.payload

        });

        // Remove All Cart 
        builder.addCase(removeAllCartFromServer.pending, (state, action) => {
            state.cartLoading = true
        });
        builder.addCase(removeAllCartFromServer.fulfilled, (state, action) => {
            state.cartLoading = false
        });
        builder.addCase(removeAllCartFromServer.rejected, (state, action) => {
            state.error = action?.payload
            state.cartLoading = false
        });

    }

})

export const { incrementQty, decrementQty, deleteCartProduct } = CartSlice.actions
export default CartSlice.reducer






        // addCartItem(state, action) {
        //     let tempData = state.cartData
        //     let isItemExists = false

        //     tempData.map((item) => {
        //         if (item.id == action.payload.id) {
        //             isItemExists = true
        //             item.qty = item.qty + 1
        //         }
        //     })
        //     if (!isItemExists) {
        //         tempData.push(action.payload)
        //     }

        //     state.cartData = tempData
        // },

        // reduceItemFromCart(state, action) {
        //     let tempData = state.cartData
        //     tempData.map((item) => {
        //         if (item.id == action.payload.id) {
        //             item.qty = item.qty - 1
        //         }
        //     })
        //     state.cartData = tempData
        // },
        // removeItemFromCart(state, action) {
        //     let tempData = state.cartData
        //     tempData.splice(action.payload, 1)
        //     state.cartData = tempData
        // }
