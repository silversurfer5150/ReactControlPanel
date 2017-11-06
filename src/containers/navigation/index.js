import React from 'react';
import Tab from './tab';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = props => (
  <div className="db-navigation">
    <Link href="/" to="/" onClick={props.expandLeadspace}>
      Dashboard Home
    </Link>
    <Link href="/" to="/about-us" onClick={props.expandLeadspace}>
      About This Project
    </Link>
    <p className="db-nav-buttons">
      {props.tabs.map((t, i) => <Tab current={props.path} key={i} path={t.path} class={t.class} selected={t.selected} name={t.name} />)}
    </p>
  </div>
);

const mapStateToProps = state => ({
  tabs: state.panel.tabs,
  path: state.router.location.pathname,
});

export default connect(mapStateToProps, null)(Navigation);
