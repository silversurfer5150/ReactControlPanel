import React from 'react';
import mainLogo from '../images/dashboardLogo.png';
import { connect } from 'react-redux';

// receives the panelType and collapse state and behaves accordingly
const Leadspace = props => (
  <div>
    <div
      className={!props.collapse ? `db-leadspace jumbotron ${props.panelType}` : `db-leadspace jumbotron db-leadspace-collapse ${props.panelType}`}
    >
      <img src={mainLogo} alt="my Dashboard" />
      <h1>My Dashboard</h1>
      <p>All of the things you need, easy to find in one place.</p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  collapse: state.panel.collapse,
  panelType: state.panel.panelType,
});

export default connect(mapStateToProps, null)(Leadspace);
