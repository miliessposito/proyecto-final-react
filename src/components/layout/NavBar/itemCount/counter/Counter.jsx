import React from 'react'

export const Counter = ({ sumar, restar, counter, stock, onAdd }) => {
    return (
        <>
            <section className="containerCount">
                <div className='counter'>
                    <button onClick={sumar} disabled={counter < stock ? false : true}>Sumar</button>
                    <span>{counter}</span>
                    <button onClick={restar} disabled={counter === 1 ? true : false}>Restar</button>
                </div>
                <div className='addCart'>
                    <button onClick={() => { onAdd(counter) }}>Agregar al carrito</button>
                </div>
            </section>

        </>
    )
}
