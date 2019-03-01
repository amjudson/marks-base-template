import { getPayload } from './fetchApi';
import statuses from '../../apiData/statuses.json';

class StatusMockApi {
  static getAllStatuses() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], statuses));
    });
  }

  static getStatusById(statusId) {
    const status = statuses.find(s => parseInt(s.statusId) === parseInt(statusId));
    return new Promise((res, rej) => {
      res(status);
    })
  }
}

export default StatusMockApi;
