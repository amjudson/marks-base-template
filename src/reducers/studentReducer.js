import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function studentReducer(state = initialState.student, action) {
  switch (action.type) {
    case actions.CREATE_STUDENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.student)
      ];
    case actions.LOAD_STUDENT_SUCCESS:
      return action.student;
    case actions.LOAD_STUDENT_FAILED:
      return action.message;
    case actions.UPDATE_STUDENT_SUCCESS:
      return [
        ...state.filter(student => student.studentId !== action.student.studentId).sort((student1, student2) => student1.lastName.localeCompare(student2.lastName)),
        Object.assign({}, action.student)
      ];
    default:
      return state;
  }
}
