import React, { useState } from 'react'
import { Counter } from './Counter'

export const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
    const [counter, setCounter] = useState(initial);

    const sumar = () => {
        setCounter(counter < stock ? counter + 1 : stock)
    }
    const restar = () => {
        setCounter(counter > 1 ? counter - 1 : 1)
    }
    return (
        <>
            <Counter counter={counter} sumar={sumar} restar={restar} stock={stock} onAdd={onAdd} />
        </>
    )
}
