import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GetLocation from "react-native-get-location";
import MyApi from "../../api/MyApi";

const header = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    }
};

export const getMyAddresses = createAsyncThunk('getMyAddressesss', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };
        const res = await MyApi.get(`user/get_all_addresses`, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})



export const setdefaultaddress = createAsyncThunk('setdefaultaddress', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };

        const res = await MyApi.get(`user/setdefaultaddress/${data.id}`, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const GetUserLocation = createAsyncThunk('GetUserLocation', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const location = await GetLocation.getCurrentPosition({ enableHighAccuracy: true });
        return location
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const addAddress = createAsyncThunk('addAddress', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokenss = getState().AUTH.userAuth.userInfo.token
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${tokenss}`
            }
        };

        const res = await MyApi.post('user/add_address', data, config)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const deleteAddressFromServer = createAsyncThunk('deleteAddresses', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post(`user/delete_address/${data.id}`, header)
        return data.id
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})




const AddressSlice = createSlice({
    name: 'AddressSlice',
    initialState: {
        addresses: [],
        address: {},
        loading: false,
        error: null,
        success: false,
        isUpdated: false
    },
    reducers: {
        deleteAddressFromLocal(state, action) {
            let tempData = state.addresses
            let PIndex = tempData.findIndex((item) => item.id == action?.payload)
            tempData.splice(PIndex, 1)
            state.addresses = tempData
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getMyAddresses.pending, (state, action) => {
            state.loading = true;
            state.isUpdated = false
        });
        builder.addCase(getMyAddresses.fulfilled, (state, action) => {
            state.loading = false;
            state.addresses = action.payload.data;
            state.success = true
        });
        builder.addCase(getMyAddresses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.success = false
        });

        builder.addCase(addAddress.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            // console.log('address', action.payload.data)
            // state.addresses = action.payload.data;
        });
        builder.addCase(addAddress.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });

        // setUserAddressById
        builder.addCase(setdefaultaddress.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(setdefaultaddress.fulfilled, (state, action) => {
            state.isUpdated = true
            state.loading = false
        });
        builder.addCase(setdefaultaddress.rejected, (state, action) => {
            state.isUpdated = false
            state.loading = false
        });

        // getUserLocation Case
        builder.addCase(GetUserLocation.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(GetUserLocation.fulfilled, (state, action) => {

            state.loading = false

        });
        builder.addCase(GetUserLocation.rejected, (state, action) => {
            state.loading = false
        });


        // Delete Address
        builder.addCase(deleteAddressFromServer.pending, (state, action) => {

        });
        builder.addCase(deleteAddressFromServer.fulfilled, (state, action) => {

        });
        builder.addCase(deleteAddressFromServer.rejected, (state, action) => {
            state.error = action?.payload

        });

    }
})

export const { deleteAddressFromLocal } = AddressSlice.actions
export default AddressSlice.reducer




// function getMyLocation() {

//     // Geolocation.getCurrentPosition(success, error, options);
//     GetLocation.getCurrentPosition({
//         enableHighAccuracy: true
//     })
//         .then(location => {
//             // Latitude = location.latitude
//             // Longitude = location.longitude
//             setLatitude(location.latitude)
//             setLongitude(location.longitude)
//             console.log('allLocation', location);
//             const HERE_API_KEY = "8zbwX2ggOPYhpAB-sX6hPxn4AYuqYnlzHyjW_OC3OxA"
//             const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${location.latitude},${location.longitude}`
//             fetch(url)
//                 .then(res => res.json())
//                 .then((resJson) => {
//                     if (resJson
//                         && resJson.Response
//                         && resJson.Response.View
//                         && resJson.Response.View[0]
//                         && resJson.Response.View[0].Result
//                         && resJson.Response.View[0].Result[0]) {
//                         let countries = resJson.Response.View[0].Result[0].Location.Address.Country
//                         let states = resJson.Response.View[0].Result[0].Location.Address.State
//                         let City = resJson.Response.View[0].Result[0].Location.Address.City
//                         let Area = resJson.Response.View[0].Result[0].Location.Address.District
//                         let PostalCode = resJson.Response.View[0].Result[0].Location.Address.PostalCode
//                         // LocationArea = City + ' ' + Area
//                         setLocationArea(City + ' ' + Area)
//                         console.log('City', City, 'area', Area)
//                     } else {
//                         console.log('error on get location')
//                     }
//                 })
//                 .catch((e) => {
//                     console.log('error', e)
//                 })
//         })
//         .catch(error => {
//             const { code, message } = error;
//             console.log('allError', code, message);
//         })

// }