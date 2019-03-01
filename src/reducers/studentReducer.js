import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function studentReducer(state = initialState.student, action) {
  switch (action.type) {
    case actions.GET_STUDENT_SUCCESS:
      return action.student;
    case actions.GET_STUDENT_FAILED:
      return action.message;
    default:
      return state;
  }
}
