import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GetLocation from "react-native-get-location";
import MyApi from "../../api/MyApi";

const header = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    }
};

export const getMyOrders = createAsyncThunk('getMyOrdersss', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const res = await MyApi.get(`user/get_my_orders`, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const addMyOrders = createAsyncThunk('addMyOrders', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        // console.log('data', data)
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };

        const res = await MyApi.post('user/add_my_orders', data, config)
        // console.log('res', res.data)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const cancleMyOrder = createAsyncThunk('cancleOrder', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const response = await MyApi.get(`user/cancle_my_orders/${data.id}`, config)
        return response.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})




const OrderSlice = createSlice({
    name: 'OrderSlice',
    initialState: {
        orders: [],
        address: {},
        cancleLoading: false,
        loading: false,
        error: null,
        success: false,
        isUpdated: false
    },
    reducers: {
        deleteOrdersFromLocal(state, action) {
            let tempData = state.orders
            let PIndex = tempData.findIndex((item) => item.id == action?.payload)
            tempData.splice(PIndex, 1)
            state.orders = tempData
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getMyOrders.pending, (state, action) => {
            state.loading = true;
            state.isUpdated = false
        });
        builder.addCase(getMyOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload.data;
            state.success = true
        });
        builder.addCase(getMyOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.success = false
        });

        builder.addCase(addMyOrders.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addMyOrders.fulfilled, (state, action) => {
            state.orders.push(action.payload.data)
            state.loading = false;
            state.success = true;
            // console.log('orderSuccess', action.payload)
            // state.orders = action.payload.data;
        });
        builder.addCase(addMyOrders.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            // console.log('orderReject', action.payload)
        });
        // Delete Address
        builder.addCase(cancleMyOrder.pending, (state, action) => {
            state.cancleLoading = true
        });
        builder.addCase(cancleMyOrder.fulfilled, (state, action) => {
            state.cancleLoading = false
            console.log('full', action.payload)
        });
        builder.addCase(cancleMyOrder.rejected, (state, action) => {
            state.error = action?.payload
            console.log('failed', action.payload)
            state.cancleLoading = false
        });

    }
})

export const { } = OrderSlice.actions
export default OrderSlice.reducer



