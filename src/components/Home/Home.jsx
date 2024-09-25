import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Home({ data }) {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/update')
    }

    const handleDelete = () => {
        data.remove()
    }
    
    const handleAdd = () =>{
        navigate('/create')
    }
    return (
           <Box sx={{display:'flex', alignItems:"flex-start"}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">NAME</StyledTableCell>
                            <StyledTableCell align="center">EMAIL</StyledTableCell>
                            <StyledTableCell align="center">ROLE</StyledTableCell>
                            <StyledTableCell align="center">EDIT</StyledTableCell>
                            <StyledTableCell align="center">DELETE</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((d) => (
                            <StyledTableRow
                                key={d.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {d.id}
                                </TableCell>
                                <TableCell align="center">{d.name}</TableCell>
                                <TableCell align="center">{d.email}</TableCell>
                                <TableCell align="center">{d.role}</TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={handleEdit}>Edit</Button></TableCell>
                                <TableCell align="center"><Button variant="contained" color='error' onClick={handleDelete}>Delete</Button></TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ml:2, mt:9}}>
            <Button variant='contained' color='success' onClick={handleAdd}>ADD+</Button>
            </Box>
            </Box>
    );
}

