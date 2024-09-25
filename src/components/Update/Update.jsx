import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';


export default function Update() {
    return (

        <Paper elevation={4}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '400px' }, display: "flex", flexDirection: "column", p: 4 }}
                noValidate
                autoComplete="off"
            >

                    
                <TextField id="outlined-basic" label="Enter id" variant="outlined" />
                <TextField id="outlined-basic" label="Enter name" variant="outlined" />
                <TextField id="outlined-basic" label="Enter email" variant="outlined" />
                <TextField id="outlined-basic" label="Enter role" variant="outlined" />
                <Box sx={{display:'flex', justifyContent:"center"}}>
                    <Button variant="contained" >Update</Button>
                   
                </Box>

            </Box>
        </Paper>

    );
}

