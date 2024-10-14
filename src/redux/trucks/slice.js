import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations";

export const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        loading: false,
        error: null,
        items: []
    },
    reducers: {},

    extraReducers: (builder) => 
        builder
            .addCase(fetchTrucks.pending, (state) => { 
                state.loading = true
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => { 
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
})

export default trucksSlice.reducer