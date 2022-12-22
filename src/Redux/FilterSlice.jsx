import { createSlice } from "@reduxjs/toolkit";

export const initialState ={
    byStock: false,
    byPrice: null,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByPrice: (state, action)=>{
            state.byPrice = action.payload
        },

        filterByStock: (state, )=>{
          state.byStock = !state.byStock
        },

        filterByFastDelivery: (state) =>{
           state.byFastDelivery = !state.byFastDelivery
        },

        filterByRating: (state, action) => {
           state.byRating = action.payload
        },

        filterBySearch: (state, action)=>{
            state.searchQuery = action.payload
        },

        clearFilters: (state)=>{    
                state.byPrice = null
                state.byFastDelivery= false
                state.byRating=0
                state.searchQuery=""
                state.byStock=false
        }
    }
});

export const {filterByPrice, filterByStock, filterByFastDelivery, filterByRating, filterBySearch, clearFilters} = filterSlice.actions;

export default filterSlice.reducer;