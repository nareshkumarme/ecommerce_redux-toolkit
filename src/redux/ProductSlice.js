import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:'item',
    initialState: {
        list: [
          // Your list of products here
        ],
        searchTerm: '', // Initialize searchTerm as an empty string
      },
    reducers:{
        setsearchTerm:(state,action) =>{
            state.searchTerm = action.payload
        }
    }

})

export const { setsearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;
