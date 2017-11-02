import React from 'react';
import mainLogo from '../../images/dashboardLogo.png';
import { connect } from 'react-redux';

const Leadspace = props => (
  <div>
    <div className={!props.collapse ? 'db-leadspace jumbotron' : 'db-leadspace jumbotron db-leadspace-collapse'}>
      <img src={mainLogo} alt="my Dashboard" />
      <h1>My Dashboard</h1>
      <p>All of the things you need, easy to find in one place.</p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  collapse: state.panel.collapse,
});

export default connect(mapStateToProps)(Leadspace);
