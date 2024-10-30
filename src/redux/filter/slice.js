import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        location: '',
        equipment: '',
        type: ''
    },

    reducers: {
        search: (state, action) => { 
            state.location = action.payload;
        }
    },
    
})

export default filterSlice.reducer

// export const {search} = filterSlice.action