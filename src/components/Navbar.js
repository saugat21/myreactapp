import React from 'react'
import { Button } from './Button'

export const Navbar = () => {
    return (

        <>
            <div>
                <h1 className='heading'>WELCOME TO MY REACT APP</h1>
            </div>
            <div className="flex">
                <Button name='Counter' destination='/counter' />
                <Button name='Dice Roller' destination='/diceroller' />
                <Button name='Simple Interest Calculator' destination='/simpleinterest' />
                <Button name='Todo List' destination='/todolist' />
                <Button name='Motivation quote' destination='/motivationquote' />
            </div>

        </>


    )
}
