import action from './mirrorActions';
import AcademyMockApi from '../api/academyMockApi';
// import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadAcademiesSuccess(academies) {
  return {
    type: action.LOAD_ACADEMIES_SUCCESS,
    academies
  };
}

export function loadAcademiesFailed(message) {
  return {
    type: action.LOAD_ACADEMIES_FAILED,
    message
  };
}

export function loadAcademySuccess(academy) {
  return {
    type: action.LOAD_ACADEMY_SUCCESS,
    academy
  };
}

export function loadAcademyFailed(message) {
  return {
    type: action.LOAD_ACADEMY_FAILED,
    message
  };
}
export function loadAcademies() {
  let academies = [];
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    try {
      return AcademyMockApi.getAllAcademies().then(academies => {
        dispatch(loadAcademiesSuccess(academies));
      });
    } catch (error) {
      return dispatch(loadAcademiesFailed(error.message));
    }
  };
}

export function loadAcademy(academyId) {
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    try {
      return AcademyMockApi.getAcademyById(academyId).then(academy => {
        dispatch(loadAcademySuccess(academy));
      });
    } catch (error) {
      return dispatch(loadAcademyFailed(error));
    }
  };
}
