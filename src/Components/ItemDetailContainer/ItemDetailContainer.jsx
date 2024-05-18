import React, { useEffect, useState } from 'react'
import getProducts from '../../data/data'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const { idProduct } = useParams()

    useEffect(() => {
        getProducts()
            .then((respuesta) => {
                const productFind = respuesta.find((productRes) => productRes.id === idProduct);
                setproduct(productFind)
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("finalizo la promesa");
            });
    }, []);

    return (
        <div className='item-detail' >
           <ItemDetail product={product} /> 
        </div>
    );
};

export default ItemDetailContainer