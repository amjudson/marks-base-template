import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StudentListRow extends PureComponent {
  constructor(props) {
    super(props);
  }

  getRankDesc(rankId) {
    const filteredRanks = this.props.ranks.filter(r => r.rankId === rankId);
    if (filteredRanks.length > 0) {
      return filteredRanks[0].description;
    }

    return 'Rank Not Found';
  }

  render() {
    const { student } = this.props;
    return (
      <Link className="row row-detail" to={'/student/' + student.studentId} style={{ textDecoration: 'none' }}>
        <div className="col-sm-1 item-detail">{student.studentId}</div>
        <div className="col-sm-2 item-detail">{student.lastName}</div>
        <div className="col-sm-2 item-detail">{student.firstName}</div>
        <div className="col-sm-2 item-detail">{this.getRankDesc(student.rankId)}</div>
      </Link>
    );
  }
}

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired,
  ranks: PropTypes.array.isRequired
};

export default StudentListRow;
