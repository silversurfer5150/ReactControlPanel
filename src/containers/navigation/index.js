import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="db-navigation">
    <Link href="/" to="/">
      Dashboard Home
    </Link>
    <Link href="/" to="/about-us">
      About This Project
    </Link>
    <p className="db-nav-buttons">
      <Link href="/" to="/">
        <button type="button" className="btn btn-lg btn-default">
          Welcome
        </button>
      </Link>
      <Link href="/" to="/gmail">
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

export default Navigation;
