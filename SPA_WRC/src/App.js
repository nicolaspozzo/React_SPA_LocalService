import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Cars from './components/Cars';
import Car from './components/Car';
import About from './components/About';

import cars from './localService/cars.json';


class App extends Component {

  state = {
    cars: cars
  }

  render() {
    return (


      <div id="app" >

        <NavBar />

        <Router>

          {/* <Link to="/">Home</Link>
          <Link to="/home">Home02</Link>
          <Link to="/cars">Car</Link>
          <Link to="/about">About</Link> */}


          < Route exact path="/" render={() => {
            return <div>
              <Home />
            </div>
          }}>
          </Route>

          <Route exact path="/cars" render={() => {
            return <div>
              {/* <Cars autos={this.state.cars} /> */}
              <div className="wrap">
                <div className="card-columns">                 
                  <Cars autos={this.state.cars} />
                </div>
              </div>              

            </div>
          }}>
          </Route>


          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />

          <Route path="/car" component={Car}/>
          {/* <Route exact path="/car" render={() => {
            return <div>
              <Car autos={this.state.cars} />
            </div>
          }}>
          </Route> */}

        </Router >



      </div >

    );
  }
}

export default App;
