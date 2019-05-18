import React, { Component } from 'react';
import Smurf from './Smurf';

class SmurfsList extends Component {
    render() {
        return (
            <div className="smurf-wrapper">
                <h1>Smurfs in the Village</h1>
                {this.props.smurfs.map(smurf => (
                    <Smurf
                        smurf={smurf}
                        key={smurf.name}
                    />
                ))}
            </div>
        );
    }
}

export default SmurfsList;