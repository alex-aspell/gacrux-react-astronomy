import React, { Component } from 'react';
import AddPlanet from '../../components/AddPlanet/AddPlanet';
import PlanetList from '../../components/PlanetList/PlanetList';

class Planets extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            newPlanet: {
                planetName: '',
                circumference: '',
            },
            
            planetsArray: [],

         }
    }

    handleChangeFor = (key) => (event) => {
        this.setState({
            newPlanet: {
                ...this.state.newPlanet,
                [key]: event.target.value,
            },
        })
    }


    handleSubmitPlanet = event => {
        event.preventDefault();
        this.setState({
            planetsArray: [...this.state.planetsArray, this.state.newPlanet],
            newPlanet: {
                planetName: '',
                circumference: '',
            }
        })
    }

    
    render() {
        return (
            <div>
                <AddPlanet newPlanet={this.state.newPlanet} handleChangeFor={this.handleChangeFor} handleSubmitPlanet={this.handleSubmitPlanet}/>
                <PlanetList planetsArray={this.state.planetsArray}/>
            </div>
        );
      }
}

export default Planets;