import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Stars from '../../pages/Stars/Stars'
import States from '../../pages/States/States'
import Planets from '../../pages/Planets/Planets'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header title="React Astronomy"/>
                    <ul>
                        <li><Link to="/stars">Stars</Link></li>
                        <li><Link to="/planets">Planets</Link></li>
                        <li><Link to="/states">States</Link></li>
                    </ul>
                    <Route path="/stars" component={Stars}/>
                    <Route path="/planets" component={Planets} />
                    <Route path="/states" component={States} />
                </div>
            </Router>
        );
      }
}

export default App;
