import React, { Component } from 'react';
import AddState from '../../components/AddState/AddState';
import StateList from '../../components/StateList/StateList';

class States extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            newState: {
                stateName: '',
                population: '',
            },
            statesArray: [],
         }
    }

    handleChangeFor = (key) => (event) => {
        this.setState({
            newState: {
                ...this.state.newState,
                [key]: event.target.value,
            }
        })
    }


    handleSubmitState = event => {
        event.preventDefault();
        this.setState({
            statesArray: [...this.state.statesArray, this.state.newState],
            newState: {
                stateName: '',
                population: '',
            }
        })
    }
    
    render() {
        return (
            <div>
                <AddState newState={this.state.newState} handleChangeFor={this.handleChangeFor} handleSubmitState={this.handleSubmitState}/>
                <StateList statesArray={this.state.statesArray}/>
            </div>
        );
      }
}

export default States;