import React, { Component } from 'react';
import './AddState.css';

class AddState extends Component{
    render() {
        return (
          <section>
              <h3>Add State</h3>
              <form>
                  <input onChange={this.props.handleChangeFor('stateName')} 
                    value={this.props.newState.stateName} 
                    type="text" placeholder="State Name" />
                  <input onChange={this.props.handleChangeFor('population')} 
                    value={this.props.newState.population} 
                    type="text" placeholder="Population" />
                  <input onClick={this.props.handleSubmitState} 
                    type="Submit" value="submit" />
                </form>
            </section>
        );
      }
}

export default AddState;