import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from './ProductSlice'
import { useSelector } from "react-redux";
import { setSearch,setSearchResults,CategorySelect,RemoveCategory } from "./searchSlice";
import searchSlice from "./searchSlice";

const ProductsView = () => {
  let prod3 ;
  let filterArray;
 

  const Categories = ["men's clothing","jewelery","electronics","women's clothing"]
  
  const product  = useSelector((state) => state.list);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const searchCategory = useSelector((state) => state.search);
  

  const dispatch = useDispatch()

  const handlesearch = (Query) => {
        dispatch(setSearch(Query))
      }

  const selectCategory = (newQuery) =>{
    let sample = searchCategory.CategoryArray.some((prod)=> (prod.category=== newQuery))
    console.log(sample)
     console.log(sample)
      if(sample){
        RemoveCategory(newQuery)
      }else{
        
        CategorySelect(newQuery)
        console.log(searchCategory.CategoryArray)
      }
      
  }




 
 
  useEffect(() => {
    dispatch(fetchProducts())
  } , [])


  if(searchTerm){
      prod3 = product.products.filter((word) => word.title.includes(searchTerm))
      
       filterArray = product.products.filter((prod) => {
          return prod3.some((prod32) => prod32.title.trim().toLowerCase() === prod.title.trim().toLowerCase())
      })
        dispatch(setSearchResults(filterArray))
  }

  return (
  
  <div className="container">
    <section className=" leftsection">
        <input type="text" placeholder="search" value={searchTerm} onChange={(e) => {handlesearch(e.target.value)}} ></input>
        
        <form className="Category">
          {Categories.map((pr) => (
            <label
           > <input type ="checkbox" value={pr}  onChange={(e) => (selectCategory(e.target.value))}  />{pr}</label>
      
          ))}
        </form>
      </section>

    <section>
    <div className="rightsection">
    {searchTerm.length >= 1 ? (filterArray.map((prod) => (
    <div key={prod.id}>
      <img src={prod.image} className="images" alt={prod.title}></img>
      <div>
        <h3>{prod.title}</h3>
        <p>{prod.price}</p>
      </div>
    </div>
    ))
    ) : (product.products.map((prod) => (
    <div key={prod.id}>
      <img src={prod.image} className="images" alt={prod.title}></img>
      <div>
        <h3>{prod.title}</h3>
        <p>{prod.price}</p>
      </div>
    </div>
  ))
 
)}
   </div>

    </section>
     </div>
    )
  }


export default ProductsView
