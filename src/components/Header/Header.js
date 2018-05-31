import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    
    constructor(props) {
        super(props); 

        this.state = { title: props.title }
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">{this.state.title}</h1>
            </header>
          </div>
        );
      }
}

export default Header;