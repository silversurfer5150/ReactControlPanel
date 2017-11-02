import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { collapseLeadspace, expandLeadspace } from '../../reducers/panel';

const Navigation = props => (
  <div className="db-navigation">
    <Link href="/" to="/" onClick={props.expandLeadspace}>
      Dashboard Home
    </Link>
    <Link href="/" to="/about-us" onClick={props.expandLeadspace}>
      About This Project
    </Link>
    <p className="db-nav-buttons">
      <Link href="/" to="/" onClick={props.expandLeadspace}>
        <button type="button" className="btn btn-lg btn-default">
          Welcome
        </button>
      </Link>
      <Link href="/" to="/gmail" onClick={props.collapseLeadspace}>
        <button type="button" className="btn btn-lg btn-primary">
          GMail
        </button>
      </Link>
      <Link href="/" to="/photos">
        <button type="button" className="btn btn-lg btn-success">
          Photos
        </button>
      </Link>
      <Link href="/" to="/drive">
        <button type="button" className="btn btn-lg btn-info">
          Drive
        </button>
      </Link>
      <Link href="/" to="/facebook">
        <button type="button" className="btn btn-lg btn-warning">
          Facebook
        </button>
      </Link>
      <Link href="/" to="/search">
        <button type="button" className="btn btn-lg btn-danger">
          Google Search
        </button>
      </Link>
    </p>
  </div>
);

const mapStateToProps = state => ({
  collapse: state.panel.collapse,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      collapseLeadspace,
      expandLeadspace,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
