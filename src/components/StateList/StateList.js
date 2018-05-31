import React, { Component } from 'react';
import './StateList.css';

class StateList extends Component{
    render() {
        return (
          <section>
              <h3>State List</h3>
              <ul>
                {this.props.statesArray.map((state, i) => <li key={i}>{state.stateName} {state.population}</li>)}
                </ul>
            </section>
        );
      }
}

export default StateList;