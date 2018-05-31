import React, { Component } from 'react';
import './PlanetList.css';

class PlanetList extends Component {
    render(){
        return(
            <div>
                <h3>Planet List</h3>
                <ul>
                    {this.props.planetsArray.map(planet => <li key={planet.planetName}>{planet.planetName} {planet.circumference}</li>)}
                </ul>
            </div>
        )
    }
}

export default PlanetList