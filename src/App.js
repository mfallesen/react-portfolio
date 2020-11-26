import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './components/PortNavbar'
import Footer from './components/Footer'
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import MaterialNav from './components/MaterialNav/MaterialNav';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>

        <Typography variant='h3' align='center'>Mikael Fallesen</Typography>
        <MaterialNav></MaterialNav>
        <Router>
          <Navbar />
          <Container>
            <Switch>
              {/* <Route  exact path="/contact" component={Contact}/> */}
              <Route exact path="/portfolio" component={Portfolio} />
              {/* <Route path="/about" component={About} /> */}
            </Switch>
          </Container>
        </Router>
        <Footer />
      </CssBaseline>
    </ThemeProvider>

  );
}

export default App;