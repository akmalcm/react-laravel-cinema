import React, { useEffect, useState } from "react";
import FormattedMoney from "../Formatted/FormattedMoney";
import FormmattedDate from "../Formatted/FormattedDate";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Copyright from "../Copyright/Copyright";
import Navigation from "../Navigation/Navigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Pagination } from "@mui/material";
import usePagination from "../Pagination/Pagination";

const PurchaseList = (props) => {
    const theme = createTheme();
    const navigate = useNavigate();
    const [state, setState] = useState(props);
    const [purchaseList, setPurchaseList] = useState([]);

    let [page, setPage] = useState(1);
    const PER_PAGE = 5;
    const count = Math.ceil(purchaseList.length / PER_PAGE);
    const _DATA = usePagination(purchaseList, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const fetchPurchaseList = () => {
        let list = [];
        fetch('http://localhost:8000/api/booking')
            .then(res => res.json())
            .then((json) => {
                json.data.map(
                    (element, i) => list[i] = element
                );
                setPurchaseList(list)
                /* Promise.all(
                    json.data.map(
                        element => fetch('http://localhost:8000/api/movie_time/' + element.movie_time_id)
                            .then(res => res.json())
                    )
                ).then(datas => {
                    json.data.forEach((element, i) => {
                        list[i] = element
                        list[i].movie_time= datas[i].data
                        list[i].movie_time_load= element.movie_time
                        list[i].movie= element.movie_time.movie
                    })
                    console.log(list);
                    setPurchaseList(list)
                }) */
            });
    }

    useEffect(() => {
        fetchPurchaseList();
    }, [])

    const handleDelete = (e, booking) => {
        e.preventDefault();

        if (window.confirm('Delete this booking with detail:\nName: ' + booking.movie.title + '\nDate: ' + booking.created_at)) {
            fetch('http://localhost:8000/api/booking/' + booking.id, { method: 'DELETE' })
                .then(() => {
                    setState({ status: 'Delete successful' });
                    window.location.reload();
                });
        }
    }

    const getTotal = () => {
        let total = 0;
        purchaseList.forEach((item) => {
            total += item.movie.price * item.quantity
        })
        return total;
    }

    const lists = _DATA.currentData().map((booking) => (
        <TableRow
            key={booking.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center">{booking.IC}</TableCell>
            <TableCell align="center">{booking.full_name}</TableCell>
            <TableCell align="center">{booking.phone_no}</TableCell>
            <TableCell align="center">{booking.movie.title}</TableCell>
            <TableCell align="center">{booking.movie_time.date}</TableCell>
            <TableCell align="center"><FormattedMoney value={booking.movie.price} /></TableCell>
            <TableCell align="center">{booking.quantity}</TableCell>
            <TableCell align="center"><FormattedMoney value={booking.movie.price * booking.quantity} /></TableCell>
            <TableCell align="center"><FormmattedDate value={booking.created_at} /></TableCell>
            <TableCell align="center">
                <Button onClick={(e) => { navigate('/purchaseDetail', { state: { booking } }) }}>Update</Button>
                <Button onClick={(e) => { handleDelete(e, booking) }}>Remove</Button>
            </TableCell>
        </TableRow>
    ));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <Box sx={{
                bgcolor: 'background.paper',
                pt: 4,
                pb: 6,
                px: 3,
                mx: 20,
                mt: 20,
                borderRadius: 2
            }}>
                <Typography variant="h6" align="center" color="black" paragraph>
                    Purchase List
                </Typography>
                <TableContainer component={Paper} md={4}>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">IC Number</TableCell>
                                <TableCell align="center">Fullname</TableCell>
                                <TableCell align="center">Phone Number</TableCell>
                                <TableCell align="center">Movie</TableCell>
                                <TableCell align="center">Movie Time</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Total</TableCell>
                                <TableCell align="center">Date Purchased</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lists}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    sx={{mt:2}}
                    onChange={handleChange}
                />

                <Copyright />
            </Box>
            {/* Total Order : <FormattedMoney value={getTotal()} /> */}
        </ThemeProvider>

    );
}
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
export default PurchaseList;