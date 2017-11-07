import React from 'react';
import Tabs from '../../components/tabs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPanelTypeFromPath } from '../utils';
import { bindActionCreators } from 'redux';
import { collapseLeadspace, expandLeadspace } from '../../actions';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    // we need to bind the access of this class to the event handler passed to child
    this.selectPanel = this.selectPanel.bind(this);
  }
  // OnMount dispatch collapse state depending on url path and panel type also
  componentDidMount() {
    const panelType = getPanelTypeFromPath(this.props.path);
    panelType === 'default' ? this.props.expandLeadspace() : this.props.collapseLeadspace(panelType);
  }
  // Do the above again but this time triggered by user tab select event
  selectPanel(e) {
    let panelType = getPanelTypeFromPath(e.target.getAttribute('id'));
    // collapse menu for more viewport if not home page - assigns the style class for header here also
    panelType = panelType === '/' ? 'default' : panelType;
    panelType === 'default' ? this.props.expandLeadspace() : this.props.collapseLeadspace(panelType);
  }

  render() {
    const { path, tabs } = this.props;
    return (
      <div className="db-navigation">
        <Link href="/" to="/" onClick={expandLeadspace}>
          Dashboard Home
        </Link>
        <Link href="/" to="/about-us" onClick={expandLeadspace}>
          About This Project
        </Link>
        <p className="db-nav-buttons">
          {tabs.map(t => (
            <Tabs current={path} selectPanel={this.selectPanel} key={t.class} path={t.path} class={t.class} selected={t.selected} name={t.name} />
          ))}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // the tabs json array, the current path of router and the panelType
  tabs: state.panel.tabs,
  path: state.router.location.pathname,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      expandLeadspace,
      collapseLeadspace,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
