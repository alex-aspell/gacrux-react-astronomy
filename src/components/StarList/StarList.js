import React, { Component } from 'react';
import './StarList.css';

class StarList extends Component{
    render() {
        return (
          <section>
              <h3>Star List</h3>
              <ul>
                {this.props.starsArray.map((star, i) => <li key={i}>{star.name} {star.magnitude}</li>)}
                </ul>
            </section>
        );
      }
}

export default StarList;