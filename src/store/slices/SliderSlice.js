import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MyApi from "../../api/MyApi";
const header = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    }
};

export const getAllSliders = createAsyncThunk("getAllSlider", async (_, { getState, rejectWithValue, dispatch }) => {
    try {
        const result = await MyApi.get("get_all_slider")
        return result.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const deleteSlider = createAsyncThunk('deleteSliders', async (id, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post(`delete_slider/${id}`, header)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const addSlider = createAsyncThunk("addSliders", async (data, { getState, rejectWithValue, dispatch }) => {
    try {
        let formdata = new FormData()
        formdata.append('image', data.image)
        const result = await MyApi.post("add_slider", formdata, header)
        return result.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

const SliderSlice = createSlice({
    name: 'SliderSlice',
    initialState: {
        slider: [],
        loading: false,
        SliderLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        // getAll Category
        builder.addCase(getAllSliders.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllSliders.fulfilled, (state, action) => {
            state.slider = action.payload?.data
            state.loading = false
        });

        builder.addCase(getAllSliders.rejected, (state, action) => {
            state.loading = false;
        });

        builder.addCase(addSlider.pending, (state, action) => {
            state.SliderLoading = true
        });
        builder.addCase(addSlider.fulfilled, (state, action) => {
            alert(action.payload?.message)
            state.SliderLoading = false

        });
        builder.addCase(addSlider.rejected, (state, action) => {
            console.log('ErrorRejectOnAddSlider', action.payload)
            state.SliderLoading = false
        });

        // Delete Address
        builder.addCase(deleteSlider.pending, (state, action) => {
            state.SliderLoading = true
        });
        builder.addCase(deleteSlider.fulfilled, (state, action) => {
            state.SliderLoading = false
        });
        builder.addCase(deleteSlider.rejected, (state, action) => {
            state.error = action?.payload
            alert(action?.payload?.message)
            state.SliderLoading = false

        });

    }
})

export default SliderSlice.reducer