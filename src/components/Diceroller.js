import React from 'react'
import { useState } from 'react'

export const Diceroller = () => {
    const [isRolling, setIsRolling] = useState(false);
    const [diceNumber, setDiceNumber] = useState(1);
    const refreshDice = () => {
        setIsRolling(true);
        setTimeout(() => {
            setIsRolling(false);
        }, 1000);
        const randomnum = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomnum)
    }
    return (
        <>
            <div className={`dice ${isRolling ? 'roll' : ''}`}>
                <img width={200} height={200} src={require(`../assets/${diceNumber}.png`)} alt='' />
                <br />
            </div>
            <div className="center">
                <button onClick={refreshDice} className='rollbtn'>ROLL THE DICE</button>
            </div>


        </>

    )
}
