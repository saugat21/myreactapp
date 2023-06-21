import React from 'react'
import { useState } from 'react'
import { Itemsquotes } from './Itemsquotes'
export const Motivationquote = () => {
    const [items, setItems] = useState([]);
    const fetchData = async () => {
        return fetch('https://jsonguide.technologychannel.org/quotes.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
    }
    return (
        <div>
            <button onClick={() => fetchData()} className='fetch'>Fetch all the quotes</button>
            {items.map((item, i) => <Itemsquotes key={i} author={item.from} text={item.text} />)}

        </div>
    )
}
