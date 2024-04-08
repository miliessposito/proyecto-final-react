import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);
    let totalItems = getTotalItems()
    return (
        <div className='cartConteiner'>
            <FaCartShopping className='cartWidget' />
            <span>{totalItems}</span>
        </div>
    )
}
