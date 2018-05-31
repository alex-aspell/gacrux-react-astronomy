import React, { Component } from 'react';
import AddStar from '../../components/AddStar/AddStar';
import StarList from '../../components/StarList/StarList';

class Stars extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            newStar: {
                name: '',
                magnitude: '',
            },
            
            starsArray: [],
            
         }
    }

    handleChangeFor = (key) => (event) => {
        this.setState({
            newStar: {
                ...this.state.newStar,
                [key]: event.target.value,
            },
            
        })
    }

    handleSubmitStar = event => {
        event.preventDefault();
        this.setState({
            starsArray: [...this.state.starsArray, this.state.newStar],
            newStar: {
                name: '',
                magnitude: '',
            }
        })
    }

    
    
    render() {
        return (
            <div>
                
                <AddStar newStar={this.state.newStar} handleChangeFor={this.handleChangeFor} handleSubmitStar={this.handleSubmitStar} />
                    <p> {this.state.newStar.name} has a magnitude of {this.state.newStar.magnitude}
                    </p>
                <StarList starsArray={this.state.starsArray} />
            </div>
        );
      }
}

export default Stars;