import React, { Component } from 'react';
import './AddPlanet.css';

class AddPlanet extends Component {
    render(){
        return(
            <section>
                <h3>Add Planet</h3>
                <input onChange={this.props.handleChangeFor('planetName')} value={this.props.newPlanet.planetName} type="text" placeholder="Planet Name" />
                <input onChange={this.props.handleChangeFor('circumference')} value={this.props.newPlanet.circumference} type="text" placeholder="Circumference" />
                <input onClick={this.props.handleSubmitPlanet} type="submit" placeholder="Submit" />
            </section>
        )
    }
}

export default AddPlanet;