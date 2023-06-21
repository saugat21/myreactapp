import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Itemsquotes = (props) => {


    return (
        <div className='itemquote'>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item>{props.text}</Item>
                    <p>Author:  {props.author}</p>
                </Stack>
            </Box>
        </div>
    )
}
