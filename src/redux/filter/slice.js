import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        loading: false,
        error: null,
        filter: '',
    },

    reducers: {},
    
    extraReducers: (builder)=>
        builder
            .addCase()
    
})

export default filterSlice.reducer