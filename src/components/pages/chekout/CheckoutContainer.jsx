import React, { useContext, useState } from 'react';
import { Checkout } from './Checkout';
import { CartContext } from '../../../context/CartContext';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export const CheckoutContainer = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null)
    let totalPrice = getTotalPrice()
    const envioDeFormulario = (e) => {
        e.preventDefault()
        if (userInfo.name !== '' && userInfo.phone !== '' && userInfo.email) {
            let order = {
                buyer: userInfo,
                items: cart,
                total: totalPrice
            }
            let ordersCollection = collection(db, 'orders');
            addDoc(ordersCollection, order).then((res) => {
                setOrderId(res.id);
            })
            cart.forEach((product) => {
                let refDoc = doc(db, 'products', product.id)
                updateDoc(refDoc, { stock: product.stock - product.quantity })
            })
            clearCart()

        } else {
            alert('Por favor ingresa todos los datos')
        }


    }
    const capturar = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} orderId={orderId} />
        </>
    )
}
