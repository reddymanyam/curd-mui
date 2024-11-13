import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Update() {
    const { id } = useParams();
    // const [data, setData] = useState([]);
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        role: "",
        id: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(`Error: ${err}`))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/users/${id}`, values)
            .then(res => setValues(res.values))
            .catch(err => console.log(`Error: ${err}`))
    }

    return (

        <Paper elevation={4}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '400px' }, display: "flex", flexDirection: "column", p: 4 }}
                noValidate
                autoComplete="off"
            >


                <TextField id="outlined-basic" label="Enter id" variant="outlined" value={values.id} onChange={(e) => setValues({ ...values, id: e.target.value })} />
                <TextField id="outlined-basic" label="Enter name" variant="outlined" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                <TextField id="outlined-basic" label="Enter email" variant="outlined" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                <TextField id="outlined-basic" label="Enter role" variant="outlined" value={values.role} onChange={(e) => setValues({ ...values, role: e.target.value })} />
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Button variant="contained" onClick={handleUpdate()} >Update</Button>

                </Box>

            </Box>
        </Paper>

    );
}

