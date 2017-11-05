import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapseLeadspace, expandLeadspace, switchPanel } from '../../actions';

const switchPanels = (props, e) => {
  const panelType = e.target.getAttribute('id');
  // collapse menu for more viewport if not home page - assigns the style class for header here also
  panelType === 'db-tab-Welcome' ? props.expandLeadspace(panelType) : props.collapseLeadspace(panelType);
  // get next Tabs and create new menu object to pass  to reducer
  const nextTabs = props.tabs.map(tab =>
    Object.assign({}, { selected: panelType.split('db-tab-')[1] === tab.name, name: tab.name, class: tab.class, path: tab.path }),
  );
  // dispacth action for next tabset
  props.switchPanel(nextTabs);
};

const Tab = props => (
  <Link href={props.path} to={props.path}>
    <button
      type="button"
      id={`db-tab-${props.name}`}
      className={`btn btn-lg ${props.class} ${props.selected ? 'db-active-panel' : ''}`}
      onClick={e => switchPanels(props, e)}
    >
      {props.name}
    </button>
  </Link>
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
