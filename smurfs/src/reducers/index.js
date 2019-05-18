/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  GET_SMURFS,
  GET_SMURFS_F,
  GET_SMURFS_S,
  ADD_SMURF,
  ADD_SMURF_F,
  ADD_SMURF_S,
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURFS_S:
      return {
        ...state,
        smurfs: [...action.payload],
        fetchingSmurfs: false
      };
    case GET_SMURFS_F:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF_S:
      return {
        ...state,
        smurfs: [...action.payload],
        addingSmurf: false
      };
    case ADD_SMURF_F:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };
    default:
      return state;
  }
};

export default smurfReducer;