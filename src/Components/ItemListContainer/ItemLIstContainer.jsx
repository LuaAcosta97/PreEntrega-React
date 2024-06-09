import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import banner from '../../assets/banner3.jpeg';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';


import './itemlistContainer.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false)
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
    .then((productsDb) => {
      const data = productsDb.docs.map( (product)=> {
        return{ id: product.id, ... product.data() }
      } )
      setProducts(data)
    })

  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", idCategory))
    console.log(q)
    getDocs(q)
    
    .then ((productsDb)=> {
      
      const data = productsDb.docs.map( (product)=> {
        return{ id: product.id, ...product.data() }
      } )
      setProducts(data)
    })


  }

  useEffect(() => {
    if (idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory]);


  return (
    <div className='container' >
      <img src={banner} className='banner'/>
      <h1 className='landing'> { idCategory ? `${idCategory}`: "Bienvenidos a Beauty Shop" } </h1>
      {
        loading ? <div>Cargando...</div> : <ItemList className= 'itemlist' products = {products}/>
      }
    </div>
  );
}

export default ItemListContainer


