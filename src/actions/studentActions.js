import action from './mirrorActions';
import StudentMockApi from '../api/studentMockApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadStudentsSuccess(students) {
  return {
    type: action.LOAD_STUDENTS_SUCCESS,
    students
  };
}

export function loadStudentsFailed(message) {
  return {
    type: action.LOAD_STUDENTS_FAILED,
    message
  };
}

export function getStudentSuccess(student) {
  return {
    type: action.GET_STUDENT_SUCCESS,
    student
  };
}

export function getStudentFailed(message) {
  return {
    type: action.GET_STUDENT_FAILED,
    message
  };
}

export function loadStudents() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return StudentMockApi.getAllStudents().then(students => {
        dispatch(loadStudentsSuccess(students));
      });
    } catch (error) {
      return dispatch(loadStudentsFailed(error.message));
    }
  };
}

export function getStudentById(studentId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return StudentMockApi.getStudentByIdApi(studentId).then(student => {
        dispatch(getStudentSuccess(student));
      });
    } catch (error) {
      return dispatch(getStudentFailed(error.message));
    }
  };
}
