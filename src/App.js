import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Menu from './Pages/Menu'
import Footer from './Components/Footer'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/"  exact component= {Home}/>
        <Route path="/Menu" exact component = {Menu}/>
        <Route path="/About" exact component = {About}/>
        <Route path="/Contact" exact component = {Contact}/>
      </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
