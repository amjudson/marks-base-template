import action from './mirrorActions';
import StatusMockApi from '../api/statusMockApi';
import {
  beginAjaxCall,
  ajaxCallError
} from './ajaxStatusActions';

export function loadStatusesSucceses(statuses) {
  return {
    type: action.LOAD_STATUSES_SUCCESS,
    statuses
  };
}

export function loadStatusesFailed(message) {
  return {
    type: action.LOAD_STATUSES_FAILED,
    message
  };
}

export function loadStatuses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return StatusMockApi.getAllStatuses().then(statuses => {
        dispatch(loadStatusesSucceses(statuses));
      });
    } catch (error) {
      console.error('ERROR:', error.message); // eslint-disable-line no-console
      return dispatch(loadStatusesFailed(error.message));
    }
  };
}
