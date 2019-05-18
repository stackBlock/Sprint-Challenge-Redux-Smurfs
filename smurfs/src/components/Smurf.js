import React, { Component } from 'react';

class Smurf extends Component {
    state = {
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height
    };



    render() {
        return (
            <div className="card">
                <h2>Name: {this.state.name}</h2>
                <p>Height: {this.state.height}</p>
                <p>Weight: {this.state.age}</p>
            </div>
        );
    }
}

export default Smurf;