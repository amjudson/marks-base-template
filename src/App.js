import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import colors from 'colors';
// import PropTypes from 'prop-types';
// import { connect } from 'redux';
import Header from './components/common/Header';
import SimpleNavigation from './components/common/SimpleNavigation';
import Home from './components/Home';
import StudentManager from './containers/student/studentManager';
import StudentFormManager from './containers/student/studentFormManager';
import PageNotFound from './components/common/PageNotFound';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import '../src/css/style.css';
import AcademyManager from './containers/academy/acadeyManager';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <SimpleNavigation />
          <main className='main'>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/student/:id' component={StudentFormManager} />
              <Route
                path='/student'
                render={() => {
                  return <StudentManager />;
                }}
              />
              <Route
                path='/academy'
                render={() => {
                  return <AcademyManager />;
                }}
              />
              <Route path='/about' component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
