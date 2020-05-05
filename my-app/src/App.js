import React from 'react';
import Home from './Home';
import Customized from './Customized';
import Contact from './Contact';
import NavBar from './NavBar';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component{

  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/Customized' component={Customized} />
        <Route exact path='/contact' component={Contact} />
        </BrowserRouter>
       
     
      </div>
    );
  }


}
