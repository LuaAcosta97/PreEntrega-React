import React, { useEffect, useState } from 'react';
import getProducts from '../../data/data';
import ItemList from './ItemList';
import './itemlistContainer.css'
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if(idCategory){

          const productsFilter = respuesta.filter( (productRes) => productRes.category === idCategory)
          setProducts(productsFilter)
        }else{
        setProducts(respuesta);
        }
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


