import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import setsearchTerm from '../redux/ProductSlice'
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([])
  const searchTerm = useSelector((state) => state.list.searchTerm)
  const dispatch = useDispatch()

   useEffect(() =>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then (data => setProducts(data))
      .catch(err => console.log(err))
    },[]

    )

    const handleSearchChange = (e) => {
        dispatch(setsearchTerm(e.target.value))

    }

    const filterProducts = searchTerm? products.filter((prod) => prod.name.toLowerCase().includes(searchTerm.toLowerCase())):products;

  return (
    

    <div class="container">

    <section className=" leftsection">
       <input type="text" placeholder="search" value={searchTerm} onChange={handleSearchChange}></input>
    </section>

    <section className="rightsection">
     {
      filterProducts.map((product) => (
        <>
        <div key={product.id}>
        <img src={product.image} className="images"></img>
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        </div>
        </>
      ))
     }
     </section>
     </div>
  
  )
    
    }


export default Products
