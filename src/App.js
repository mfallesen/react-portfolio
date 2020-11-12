import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './components/PortNavbar'
import Footer from './components/Footer'
import About from './components/About';
import Portfolio from './components/Portfolio'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            {/* <Route path="/contact" component={Contact}/> */}
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;