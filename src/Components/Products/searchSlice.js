import { createSlice } from "@reduxjs/toolkit";


 const initialState = {
  searchTerm:"",
  filteredProducts:[],
  CategoryArray:[],
  Categor:""
  

  
}
export const searchSlice = createSlice({
     name:'search',
     initialState,
     
    reducers: {
        setSearch:(state,action) =>{
           state.searchTerm = action.payload
        },

        setSearchResults:(state,action)=>{
          state.filteredProducts = action.payload
        },

        CategorySelect:(state,action) => {
          state.Categor = action.payload
          state.CategoryArray  = state.filteredProducts.filter((prod)=> prod.category === state.Categor)
        },

        RemoveCategory:(state,action)=> {
           state.CategoryArray = state.CategoryArray.filter((prod) => prod.category !== action.Categor)
        }
      }
    
});

export const {setSearch,setSearchResults,CategorySelect,RemoveCategory} = searchSlice.actions
export default searchSlice.reducer
