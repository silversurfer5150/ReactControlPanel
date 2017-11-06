import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapseLeadspace, expandLeadspace, switchPanel } from '../../actions';

const selectPanel = (props, e) => {
  const panelType = e.target.getAttribute('id');
  // collapse menu for more viewport if not home page - assigns the style class for header here also
  panelType === 'db-tab-Welcome' ? props.expandLeadspace(panelType) : props.collapseLeadspace(panelType);
};

const Tab = props => (
  <NavLink to={props.path}>
    <button
      type="button"
      id={`db-tab-${props.name}`}
      className={`btn btn-lg ${props.class} ${props.current === props.path ? 'db-active-panel' : ''}`}
      onClick={e => selectPanel(props, e)}
    >
      {props.name}
    </button>
  </NavLink>
);

const mapStateToProps = state => ({
  tabs: state.panel.tabs,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      collapseLeadspace,
      expandLeadspace,
      switchPanel,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
