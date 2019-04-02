import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import '../../css/styles.less.css'
// import '../../css/style.css'

class Navigation extends PureComponent {
  render() {
    return (
      <div className='sidebar'>
        <nav className='scrollbar-container sidebar-nav ps ps-container ps--active-y'>
          <ul className='nav'>
            <li className='nav-title'>Mark's Base Template</li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <i className='nav-icon fas fa-home' />
                <span>Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/student' className='nav-link'>
                <i className='nav-icon fas fa-user' />
                <span>Student</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/academy' className='nav-link'>
                <i className='nav-icon fas fa-question' />
                <span>Academy</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <i className='nav-icon fas fa-question' />
                <span>About</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <i className='nav-icon fas fa-question' />
                <span>To come Two</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <i className='nav-icon fas fa-question' />
                <span>To come Three</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <i className='nav-icon fas fa-question' />
                <span>To come Four</span>
              </Link>
            </li>
            <li className='nav-item mt-auto'>
              <Link className='nav-link nav-link-danger' to='/credits'>
                <i className='nav-icon cui-layers' /> Credits
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

// Navigation.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Navigation;
