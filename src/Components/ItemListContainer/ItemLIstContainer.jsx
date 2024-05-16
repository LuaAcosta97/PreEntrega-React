import React, { useEffect, useState } from 'react';
import getProducts from '../../data/data';
import ItemList from './ItemList';
import './itemlistContainer.css'


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        setProducts(respuesta)
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, []);

  console.log(products)

  return (
    <div className='container' >
      <p className='landing'> {props.saludo} </p>
      <ItemList className= 'itemlist' products = {products}/>
    </div>
  );
}

export default ItemListContainer


