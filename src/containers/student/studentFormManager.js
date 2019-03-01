import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/studentActions';
import StudentForm from '../../components/student/studentForm';

class StudentFormManager extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(actions.getStudentById(this.props.match.params.id));
  };

  render() {
    const { student } = this.props;
    return (
      <div>
        <StudentForm student={student} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps)(StudentFormManager);
