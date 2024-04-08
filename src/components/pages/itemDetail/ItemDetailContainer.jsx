import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { SppinerDetail } from '../../common/spinner/Sppiner';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart, getTotalQuantityById } = useContext(CartContext);

    const total = getTotalQuantityById(id);
    console.log(total)
    useEffect(() => {
        setIsLoading(true)
        let productsColection = collection(db, 'products');
        let refDoc = doc(productsColection, id);
        getDoc(refDoc).then(res => {
            setItem({ ...res.data(), id: res.id })
        }).finally(() => setIsLoading(false))
    }, [id]);

    const onAdd = (cantidad) => {
        let infoProducto = {
            ...item,
            quantity: cantidad
        }
        addToCart(infoProducto)
    }

    return (
        <>
            {isLoading ? <SppinerDetail /> : <ItemDetail {...item} onAdd={onAdd} initial={total} />}
        </>
    )
}
