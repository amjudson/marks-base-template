import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <header className='app-header navbar'>
        <div className='ml-3'>
          <h3>
            <strong>Mark's Base Template</strong>
          </h3>
        </div>
      </header>
    );
  }
}

export default Header;
