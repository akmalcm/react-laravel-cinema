import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../Copyright/Copyright';
import { Card, CardMedia, CardContent, Select } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import FormattedMoney from '../Formatted/FormattedMoney';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

<link rel="stylesheet" href="index.css"></link>

const PurchaseForm = () => {
    const theme = createTheme();
    const [booking, setPurchase] = useState(null);
    const { state } = useLocation();
    const navigate = useNavigate();

    const item = state.booking;
    useEffect(() => {
        if (booking) {
            const requestOptions = {
                method: state.status,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(booking)
            };

            let url = state.status === 'POST' ? `${process.env.REACT_APP_API_URL}/api/booking` : `${process.env.REACT_APP_API_URL}/api/booking/` + booking.id;

            fetch(url, requestOptions)
                .then(res => res.json())
                .then((result) => {
                    if (result.success) {
                        alert('Process success.');
                        state.status === 'POST' ? navigate('/') : navigate('/purchases');
                    } else {
                        alert(result.message);
                    }
                }, (error) => {
                    setPurchase(null)
                    alert('Purchased Failed');
                });

        }
    }, [booking, navigate, state.status]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (!item.id) {
            state.status = 'POST'
        } else {
            state.status = 'PATCH'
        }

        setPurchase({
            id: item.id,
            quantity: data.get('quantity'),
            full_name: data.get('full_name'),
            // last_name: data.get('last_name'),
            IC: data.get('IC'),
            movie_time_id: data.get('movie_time_id'),
            // postcode: data.get('postcode'),
            phone_no: data.get('phone_no'),
            total: parseInt(data.get('quantity')) * parseFloat(item.movie.price),
            // state: data.get('state'),
        });
    };

    const movie_time_lists = item.movie.movie_times.map((movie_time) => (
        <MenuItem key={movie_time.id} value={movie_time.id}>{movie_time.date + ' ' + movie_time.time}</MenuItem>
    ));

    const [movieTime, setMovieTime] = React.useState('');
    const handleChange = (event) => {
        setMovieTime(event.target.value);
    }

    const handleChangeQty = (e) => {
        if (!parseInt(e.target.value)) {
            e.target.value = 1
        }
        if (e.target.value < 0) {
            e.target.value = 1
        }
        if (e.target.value > 5) {
            e.target.value = 5
            return
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Navigation />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LocalGroceryStoreIcon />
                    </Avatar>
                    <Typography id='purchaseform_h1' component="h1" variant="h5">
                        Movie Purchase Details
                    </Typography>
                    <Box component="form" noValidate={false} onSubmit={handleSubmit}>
                        <Grid item xs={12} sm={6} md={3} sx={{ m: 4 }}>
                            <Card
                                sx={{ height: 'fit-content', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        padding: '5px',
                                        height: '100%'
                                    }}
                                    src={`${process.env.REACT_APP_API_URL}/storage/movie/image/` + item.movie.poster}
                                    alt={item.movie.description}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.movie.name}
                                    </Typography>
                                    <Typography>
                                        {item.movie.description}
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <FormattedMoney value={item.movie.price} />
                                    </Typography>
                                </CardContent>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="quantity"
                                        required
                                        fullWidth
                                        type="number"
                                        id="quantity"
                                        label="Quantity"
                                        inputProps={{ inputMode: 'numeric', min: 1, max: 5 }}
                                        defaultValue={item.quantity ?? 1}
                                        onChange={(e) => { handleChangeQty(e) }}
                                    />
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid id="purchaseform" container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="IC"
                                    label="IC Number"
                                    name="IC"
                                    autoComplete="IC"
                                    autoFocus
                                    defaultValue={item.IC}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="full_name"
                                    required
                                    fullWidth
                                    id="full_name"
                                    label="Full Name"
                                    defaultValue={item.full_name}
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="family-name"
                                    defaultValue={item.last_name}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone_no"
                                    label="Phone Number"
                                    type="text"
                                    id="phone_no"
                                    autoComplete="phone_no"
                                    defaultValue={item.phone_no}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <TextField
                                    required
                                    fullWidth
                                    name="address"
                                    label="this should be a dropdown"
                                    type="text"
                                    id="address"
                                    autoComplete="address"
                                    defaultValue={item.address}
                                    /> */}
                                <FormControl fullWidth>
                                    <InputLabel id="movie_time">Pick your time</InputLabel>
                                    <Select
                                        name="movie_time_id"
                                        labelId="movie_time"
                                        id="movie_time"
                                        defaultValue={ item.movie_time ? item.movie_time.id : '' }
                                        label="movie_time"
                                        required
                                    >
                                        {movie_time_lists}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="postcode"
                                    label="Postcode"
                                    name="postcode"
                                    autoComplete="postcode"
                                    defaultValue={item.postcode}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="state"
                                    label="State"
                                    name="state"
                                    autoComplete="state"
                                    defaultValue={item.state}
                                />
                            </Grid> */}
                        </Grid>
                        {item.date_added ? <Button type="submit" sx={{ mt: 3, mb: 5 }}>Edit</Button> : <Button id='purchaseform_button' type="submit" sx={{ mt: 3, mb: 5 }}>Click here to book now</Button>}

                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}

export default PurchaseForm;