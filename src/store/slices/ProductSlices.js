import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MyApi from "../../api/MyApi";
export const getAllProduct = createAsyncThunk("getAllDataProduct", async () => {
    try {
        const result = await MyApi.get("get_all_product")
        return result.data
    } catch (e) {
        console.log('getProdError', e)
    }
})

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: {
        data: [],
        isLoading: false,
        product: [],
        deliveryCharge: 49,
        productLoading: false
    },
    reducers: {

        addProduct(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        // getAll Product

        builder.addCase(getAllProduct.pending, (state, action) => {
            state.productLoading = true;
        });

        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            if (action.payload?.error === false) {
                action.payload?.data.map((item) => {
                    item.qty = 1
                })
                state.product = action.payload?.data
                state.productLoading = false
            } else {
                state.productLoading = false
            }

        });

        builder.addCase(getAllProduct.rejected, (state, action) => {
            state.productLoading = false;
        });

    }
})

export const { addProduct } = ProductSlice.actions
export default ProductSlice.reducer
