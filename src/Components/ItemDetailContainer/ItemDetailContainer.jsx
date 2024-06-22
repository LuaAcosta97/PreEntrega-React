import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db from '../../db/db';
import { toast } from 'react-toastify';

import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(true)


    const getProducts = () => {
        const productRef = doc(db, "products", idProduct)
        console.log(productRef)
        getDoc(productRef)
            .then((productDb) => {
                const data = { id: productDb.id, ...productDb.data() }
                setproduct(data)
                // detener cargador cuando se obtienen los productos
                setLoading(false);
            })
            .catch((error) => {
                console.log("error obteniendo productos:", error);
                toast.error('error obteniendo productos:');
                // en caso de error, tambien detenemos la carga
                setLoading(false);
            });
    };

    useEffect(() => {
        // iniciar la carga al montar el componente
        setLoading(true);

        getProducts()
    }, [idProduct]);

    return (
        <div className='item-detail' >
            {
                loading ? <div className='loading-detail'></div> : <ItemDetail product={product} />
            }
        </div>
    );
};

export default ItemDetailContainer