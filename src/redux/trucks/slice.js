import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations";
import { selectFilterQuery } from "../filter/selectors";
import { selectAllTrucks } from "./selectors";

export const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        loading: false,
        error: null,
        items: [],
        currentPage: 1,
        itemsPerPage: 4,
    },
    reducers: {
        setPage: (state, action) => { 
            state.currentPage = action.payload;
        }
    },

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

// export const selectFilteredTrucks = createSelector(
//     [selectAllTrucks, selectFilterQuery],
// )

// selectFilteredTrucks()

export const { setPage } = trucksSlice.actions;
export default trucksSlice.reducer