import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        location: '',
        equipment: {
            AC: false,
            automatic: false,
            kitchen: false,
            TV: false,
            bathroom: false
        },
        type: {
            van: false,
            fullyIntegrated: false,
            aclove: false,
        }
    },

    reducers: {
        setSearch: (state, action) => {
            console.log(action.payload)
            state.location = action.payload;
        }
    },
    
});

export const { setSearch } = filterSlice.actions;
export default filterSlice.reducer;
