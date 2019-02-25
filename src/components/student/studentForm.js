import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { browserHistory } from 'react-router';
// import TextInput from '../common/TextInput';
// import SelectInput from '../common/SelectInput';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class StudentForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { student } = this.props;
    return (
      <div className="container-fluid">
        <h3>This is the student page for: <strong>{student.firstName} {student.lastName}</strong></h3>
      </div>
    );
  }
}

StudentForm.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentForm;
