import { getPayload, getPayloadJson } from './fetchApi';
//     return getPayload(`${process.env.API_MOCK}/students.json`, 'GET', 'Student').then(students => {
import students from '../../apiData/students.json';

let istudent = {
  academyId: 0,
  beltSize: "000",
  dateOfBirth: "1900-01-01T00:00:00",
  firstName: "Testfirst",
  fullName: "Testlast, Testfirst",
  lastName: "Testlast",
  lastTestingDate: "1900-01-01T00:00:00",
  middleName: null,
  rankId: 0,
  startDate: "1900-01-01T00:00:00",
  studentId: 0,
  studentStatusId: 0
}

class StudentMockApi {
  static getAllStudents() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], students));
    });
  }

	static getStudentByIdApi(studentId) {
    const student = students.find((s) => { return parseInt(s.studentId) === parseInt(studentId) });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(student);
      }, 100)
    });
  }
}

export default StudentMockApi;
