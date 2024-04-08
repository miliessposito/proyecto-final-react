import React from 'react'
import { ProductCart } from '../../common/productCart/ProductCart'

export const ItemList = ({ items }) => {

    return (
        <>
            <div className="containerProductCarts">
                <ProductCart items={items} />
            </div>

        </>
    )
}
