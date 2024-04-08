import React from 'react';
import { BeatLoader, BounceLoader } from 'react-spinners';

export const SppinerList = () => {
    return (
        <div className='sppiner'>
            <BounceLoader size={200} color='blue' />
        </div>
    )
}
export const SppinerDetail = () => {
    return (
        <div className='sppiner'>
            <BeatLoader size={80} color='green' />
        </div>
    )
}

