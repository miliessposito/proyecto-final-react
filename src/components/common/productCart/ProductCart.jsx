import React from 'react'
import { ItemCount } from '../../layout/NavBar/itemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ProductCart = ({ items }) => {

    return (
        <section className="conteinerGeneralCart">
            {items.map((item) => {
                return (
                    <div className='imgProductCart' key={item.id}>
                        <img src={item.img} alt='' />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <Link to={`/item/${item.id}`}><button>Detalle</button></Link>
                    </div>)
            })}




        </section>
    )
}
