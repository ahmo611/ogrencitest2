import { STUDENT_LIST_DATA_SUCCESS } from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_LIST_DATA_SUCCESS:
    console.log(action);
      return state; 
    default:
      return state;
    }
};