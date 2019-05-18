
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfsList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleAddSmurf = ({ name, age, height }) => {
    this.props.addSmurf({ name, age, height });
  };

  render() {
    return (
      <div className="App">
        {
          <SmurfForm handleAddSmurf={this.handleAddSmurf} title="Add Smurf" />
        }
        {this.props.fetchingSmurfs ? (
          <div>Loading...</div>
        ) : (
            <SmurfList
              smurfs={this.props.smurfs}
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
