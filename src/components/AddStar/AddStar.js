import React, { Component } from 'react';
import './AddStar.css';

class AddStar extends Component{
    render() {
        return (
          <section>
              <h3>Add Star</h3>
              <form>
                  <input onChange={this.props.handleChangeFor('name')} 
                    value={this.props.newStar.name} 
                    type="text" placeholder="Name" />
                  <input onChange={this.props.handleChangeFor('magnitude')} 
                    value={this.props.newStar.magnitude} 
                    type="text" placeholder="Magnitude" />
                  <input onClick={this.props.handleSubmitStar} 
                    type="Submit" value="submit" />
                </form>
            </section>
        );
      }
}

export default AddStar;