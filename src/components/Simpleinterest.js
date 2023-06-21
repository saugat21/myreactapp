import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


export const Simpleinterest = () => {
    const [principle, setPrinciple] = useState(0);
    const [time, setTime] = useState(0);
    const [rate, setRate] = useState(0);
    const [si, setSi] = useState(0)
    return (
        <div className='simple'>
            <h1>Simple Interest Calculator</h1>
            <div className="field">
                <TextField onChange={(e) => setPrinciple(e.target.value)} id="outlined-basic" label="Enter principle" variant="outlined" />
                <TextField onChange={(e) => setTime(e.target.value)} id="outlined-basic" label="Enter time" variant="outlined" />
                <TextField onChange={(e) => setRate(e.target.value)} id="outlined-basic" label="Enter rate" variant="outlined" />
            </div>
            <button onClick={() => setSi((principle * time * rate) / 100)}>Calculate</button>
            <h2>SIMPLE INTEREST IS :{si}</h2>
        </div>
    )
}
