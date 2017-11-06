import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapseLeadspace, expandLeadspace, switchPanel } from '../../actions';

const selectPanel = (props, e) => {
  const panelType = e.target.getAttribute('id');
  // collapse menu for more viewport if not home page - assigns the style class for header here also
  panelType === '' ? props.expandLeadspace() : props.collapseLeadspace(panelType);
};

class Tab extends React.Component {
  componentWillMount() {
    const panelType = this.props.current !== '/' ? `${this.props.current.replace(/^\/+/g, '')}` : 'default';
    this.props.current === '/' ? this.props.expandLeadspace() : this.props.collapseLeadspace(panelType);
  }
  render() {
    const props = this.props;
    return (
      <NavLink to={props.path}>
        <button
          type="button"
          id={props.path.replace(/^\/+/g, '')}
          className={`btn btn-lg ${props.class} ${props.current === props.path ? 'db-active-panel' : ''}`}
          onClick={e => selectPanel(props, e)}
        >
          {props.name}
        </button>
      </NavLink>
    );
  }
}

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
