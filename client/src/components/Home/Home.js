import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import FormattedMoney from '../Formatted/FormattedMoney';

<link rel="stylesheet" href="index.css"></link>

const Home = (props) => {
    const [state, setState] = useState(props);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchFigures();
    }, [])

    const fetchFigures = () => {
        fetch("http://localhost:8000/api/movie")
            .then(res => res.json())
            .then((result) => {
                setItems(result.data)
            }, (error) => {
                setState({
                    isLoaded: false, error
                });
            });
    }

    const handlePurchase = (id) => {
        let i = items.findIndex(({ id }) => id === id);
        navigate('/purchase', {state:{booking :{movie: items[i]}}});
    }

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <main>
                {/* Hero unit */}
                <Box id ="top"
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 12,
                        pb: 6,
                    }}
                >
                    <Container id ="topbox" maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color= "black"
                            gutterBottom
                        >
                            <br></br>
                            Movies/Cinema
                        </Typography>
                        <Typography variant="h5" align="center" color="black" paragraph>
                            Book your movies through here now!
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            {/* <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button> */}
                        </Stack>
                    </Container>
                </Box>
                <Container maxWidth="xxl">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {items.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={3} >
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia 
                                        component="img"
                                        sx={{
                                            // 16:9
                                            padding: '5px',
                                            height: '50%',
                                            width: '50%',
                                            margin: 'auto',
                                        }}
                                        src={'http://localhost:8000/storage/movie/image/' + item.poster}
                                        alt={item.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={(e) => handlePurchase(item.id)}>Purchase</Button>
                                        <Typography gutterBottom variant="h6" component="h5" sx={{textAlign:'right', width:'100%'}}>
                                           <FormattedMoney value={item.price} />
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default Home;