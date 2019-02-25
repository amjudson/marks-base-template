import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css'

class SimpleNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title">People Tracker</li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <i className="fas fa-home nav-icon"></i>
                <span className="navSpan">Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/student'>
                <i className="fas fa-user nav-icon"></i>
                <span className="nav-span">Student</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/academy'>
                <i className="fa fa-graduation-cap nav-icon"></i>
                <span className="nav-span">Academy</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                <i className="fa fa-lightbulb-o nav-icon"></i>
                <span className="nav-span">About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  };
}

export default SimpleNavigation;
