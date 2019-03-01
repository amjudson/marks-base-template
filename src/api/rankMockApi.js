import ranks from '../../apiData/ranks.json';

class RankMockApi {
  static getAllRanks() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], ranks));
    });
  }

  static getRankById(rankId) {
    const rank = ranks.find(s => parseInt(s.rankId) === parseInt(rankId));
    return new Promise((res, rej) => {
      res(rank);
    })
  }
}

export default RankMockApi;
