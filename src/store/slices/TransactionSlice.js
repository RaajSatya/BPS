import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MyApi from "../../api/MyApi";

export const getMyTransactions = createAsyncThunk('getMyTransactionsss', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH?.userAuth?.userInfo?.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const res = await MyApi.get(`user/get_my_transactions`, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const addMyTransactions = createAsyncThunk('addMyTransactions', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH?.userAuth?.userInfo?.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const res = await MyApi.post('user/add_my_transactions', data, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})


const TransactionSlice = createSlice({
    name: 'TransactionSlice',
    initialState: {
        transactions: [],
        transactionLoading: false,
        transactionError: null
    },
    // reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMyTransactions.pending, (state, action) => {
            state.transactionLoading = true;
            state.isUpdated = false
        });
        builder.addCase(getMyTransactions.fulfilled, (state, action) => {
            state.transactionLoading = false;
            state.transactions = action.payload.data;
            state.success = true
        });
        builder.addCase(getMyTransactions.rejected, (state, action) => {
            state.transactionLoading = false;
            state.error = action.payload
            state.success = false
        });

        builder.addCase(addMyTransactions.pending, (state) => {
            state.transactionLoading = true;
        });
        builder.addCase(addMyTransactions.fulfilled, (state, action) => {
            state.transactions.push(action.payload.data)
            state.transactionLoading = false;
            state.success = true;
        });
        builder.addCase(addMyTransactions.rejected, (state, action) => {
            state.transactionLoading = false;
            state.success = false;
            state.error = action.payload;
        });


    }
})

export const { } = TransactionSlice.actions
export default TransactionSlice.reducer