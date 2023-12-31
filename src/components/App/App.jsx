import { HashRouter as Router, Route } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details'

import { Typography, Container, ThemeProvider } from '@mui/material';

import './App.css';
import theme from '../theme';

function App() {
  return (

    // container
    <>
      <ThemeProvider theme={theme}>
        <Container
          className="App"
          maxWidth="xl"
          sx={{
            bgcolor: "background.red",
            borderRadius: 2,
            padding: 4
          }}>

          {/* header */}
          <Typography
            variant="h1"
            sx={{
              bgcolor: 'error.main',
              border: '1',
              borderColor: 'background.red',
              boxShadow: 20,
              borderRadius: 4,
              padding: 2
            }}>
            Saga Movie Theatre
          </Typography>

          {/* components */}
          <Router>
            <Route exact path="/">
              <MovieList />
            </Route>

            <Route exact path="/details">
              <Details />
            </Route>
          </Router>

        </Container>
      </ThemeProvider>
    </>
  );
}


export default App;
