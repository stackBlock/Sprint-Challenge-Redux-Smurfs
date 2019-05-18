/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_S = 'GET_SMURFS_S';
export const GET_SMURFS_F = 'GET_SMURFS_F';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_S = 'ADD_SMURF_S';
export const ADD_SMURF_F = 'ADD_SMURF_F';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS_S, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_F, payload: err });
    });
};

export const addSmurf = ({ name, age, height }) => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => {
      dispatch({ type: ADD_SMURF_S, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_F, payload: err });
    });
};

