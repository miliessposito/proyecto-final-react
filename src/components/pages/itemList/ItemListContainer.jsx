import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';
import { SppinerList } from '../../common/spinner/Sppiner';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const { category } = useParams()
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        let productsColection = collection(db, 'products');
        let consulta = productsColection;
        if (category) {
            let prodctsFilter = query(productsColection, where('category', '==', category));
            consulta = prodctsFilter;
        }
        getDocs(consulta).then(res => {
            let arrayRes = res.docs.map((element) => {
                return { ...element.data(), id: element.id };
            })
            setItems(arrayRes);
        }).finally(() => setIsLoading(false))

    }, [category])

    if (isLoading) {
        return <SppinerList />
    }
    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer