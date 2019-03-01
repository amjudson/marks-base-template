import RankMockApi from '../api/rankMockApi';
import action from './mirrorActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadRanksSuccess(ranks) {
  return {
    type: action.LOAD_RANKS_SUCCESS,
    ranks
  };
}

export function loadRanksFailed(message) {
  return {
    type: action.LOAD_RANKS_FAILED,
    message
  };
}

export function loadRankSuccess(rank) {
  return {
    type: action.LOAD_RANK_SUCCESS,
    rank
  };
}

export function loadRankFailed(message) {
  return {
    type: action.LOAD_RANK_FAILED,
    message
  };
}

export function loadRanks() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return RankMockApi.getAllRanks().then(ranks => {
      dispatch(loadRanksSuccess(ranks));
    }).catch(error => {
      dispatch(loadRanksFailed(error));
    });
  };
}

export function loadRank(rankId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return RankMockApi.getRankById(rankId).then(rank => {
        dispatch(loadRankSuccess(rank));
      });
    } catch (error) {
      return dispatch(loadRankFailed(error));
    }
  };
}
