import React, { useState } from 'react'

export const Todolist = () => {
    const [userinput, setUserinput] = useState("");
    const [todos, setTodos] = useState([]);

    const add = () => {
        setTodos([...todos, userinput]);
    }


    const handleDeleteTodo = (index) => {
        setTimeout(() => {
            const updatedTodos = todos.filter((todo, i) => i !== index);
            setTodos(updatedTodos);
        }, 100);

    };
    return (
        <div className='todolist'>
            <h1>Todo List</h1>
            <input type="text" onChange={(e) => setUserinput(e.target.value)} />
            <button onClick={() => add()}>Add</button>
            <ul>
                {todos.map((e, index) => <li key={index}>{e} <input type='checkbox' onChange={() => handleDeleteTodo(index)} /></li>)}
            </ul>

        </div>
    )
}
