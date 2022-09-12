import logo from './logo.svg';
import './App.css';
import ListaRecetas from './components/ListaRecetas';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import VistaReceta from './components/VistaReceta';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgregarReview from './components/AgregarReview';
import Login from './components/Login';


function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ListaRecetas}></Route>
          <Route exact path="/receta" component={ListaRecetas}></Route>
          <Route path="/receta/:id" component={VistaReceta}></Route>
          <Route path="/agregar-review" component={AgregarReview}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Footer/>       
    </Router>
    
  );
}

export default App;