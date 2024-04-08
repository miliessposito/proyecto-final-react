import React from 'react'
import { Link } from 'react-router-dom'

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
    return (
        <div>

            {orderId ?
                <div className="orderConteiner">
                    <div className='order'>
                        <h1>Gracias por su compra, su numero de compra es: <span>{orderId}</span></h1>
                        <Link to='/' className='link'>Seguir comprando</Link>
                    </div>
                </div> :
                <form onSubmit={envioDeFormulario} className='formCheckout'>
                    <input type="text" placeholder='Ingresa tu nombre' onChange={capturar} name='name' />
                    <input type="number" placeholder='Ingresa tu telefono' onChange={capturar} name='phone' />
                    <input type="email" placeholder='Ingresa tu email' onChange={capturar} name='email' />
                    <button type='submit'>Enviar</button>
                </form>}
        </div>
    )
}
