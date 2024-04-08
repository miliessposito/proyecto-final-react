import React from 'react';
import { CounterContainer } from './counter/CounterContainer';

export const ItemCount = ({ stock, onAdd, initial }) => {
    return (
        <>
            <CounterContainer stock={stock} onAdd={onAdd} initial={initial} />
        </>
    )
}
