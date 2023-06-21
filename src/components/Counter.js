import React from 'react'
import { useState } from 'react'
export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <h1 className='number'>{count}</h1>
            <button onClick={() => setCount(count + 1)}>ADD</button>
            <button onClick={() => { setCount(count - 1) }}>LESS</button>
            <button onClick={() => { setCount(0) }}>RESET</button>
        </div>
    )
}
