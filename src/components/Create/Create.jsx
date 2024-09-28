import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        role: "",
        id:""
    })
    
    const navigate = useNavigate();

    const handlePost = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:4000/users",values)
        .then(res =>{
            console.log(res)
            navigate('/')
            })
           
        .catch(err => console.log('getting error',err)
        )
      
    }
    return (

        <Paper elevation={4}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '400px' }, display: "flex", flexDirection: "column", p: 4 }}
                noValidate
                autoComplete="off"
            >

                <Typography variant="h4" gutterBottom>
                    Create the user
                </Typography>
                <TextField id="outlined-basic" label="Enter id" variant="outlined" value={values.id} onChange={(e)=>setValues({...values,id:e.target.value})}/>
                <TextField id="outlined-basic" label="Enter name" variant="outlined" value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})}/>
                <TextField id="outlined-basic" label="Enter email" variant="outlined" value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})}/>
                <TextField id="outlined-basic" label="Enter role" variant="outlined" value={values.role} onChange={(e)=>setValues({...values,role:e.target.value})}/>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Button variant="contained" onClick={handlePost} >ADD</Button>
                </Box>

            </Box>
        </Paper>

    );
}

