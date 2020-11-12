import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './components/PortNavbar'
import Footer from './components/Footer'
import About from './components/About';
import { Route, Switch } from "react-router"

function App() {
  return (
    <div>
        <Navbar/>
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            {/* <Route path="/contact" component={Contact}/> */}
            {/* <Route path="/portfolio" component={Portfolio} /> */}
          </Switch>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;