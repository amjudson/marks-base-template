/* combined reducers */
import { combineReducers } from 'redux';
import academies from './academiesReducer';
import students from './studentsReducer';
import student from './studentReducer';
import ranks from './rankReducer';
import statuses from './statusReducer';

const rootReducer = combineReducers({
  academies,
  statuses,
  students,
  student,
  ranks
});

export default rootReducer;
