import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export const Button = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.destination;
    return (
        <div >
            <Link className={`${isActive ? 'active' : ''}`} to={props.destination}><button>{props.name}</button></Link>
        </div>
    )
}
