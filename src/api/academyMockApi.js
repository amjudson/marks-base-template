import academies from '../../apiData/academies.json';

class AcademyMockApi {
  static getAllAcademies() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], academies));
    });
  }

  static getAcademyById(academyId) {
    const academy = academies.find(s => parseInt(s.academyId) === parseInt(academyId));
    return new Promise((res, rej) => {
      res(academy);
    })
  }
}

export default AcademyMockApi;
