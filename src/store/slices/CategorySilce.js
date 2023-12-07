import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MyApi from "../../api/MyApi";
const header = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    }
};

export const getAllCategory = createAsyncThunk("getAllDataCategory", async () => {
    try {
        const result = await MyApi.get("get_all_category")
        return result.data
    } catch (e) {
        console.log('getErrorOnCategory', e)
    }
})
const CategorySilce = createSlice({
    name: 'CategorySlice',
    initialState: {
        category: [],
        CategoryLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        // getAll Category
        builder.addCase(getAllCategory.pending, (state, action) => {
            state.CategoryLoading = true;
        });
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            if (action.payload?.error == false) {
                state.category = action.payload?.data
                state.CategoryLoading = false

            } else {
                state.CategoryLoading = false
            }

        });

        builder.addCase(getAllCategory.rejected, (state, action) => {
            state.CategoryLoading = false;
        });

    }
})

export default CategorySilce.reducer