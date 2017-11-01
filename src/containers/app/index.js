import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div className="container theme-showcase">
    <header>
      <Link href="/" to="/">
        Home
      </Link>
      <Link href="/" to="/about-us">
        About
      </Link>
    </header>
    <p>
      <button type="button" className="btn btn-lg btn-default">
        Default
      </button>

      <button type="button" className="btn btn-lg btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-lg btn-success">
        Success
      </button>
      <button type="button" className="btn btn-lg btn-info">
        Info
      </button>
      <button type="button" className="btn btn-lg btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-lg btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-lg btn-link">
        Link
      </button>
    </p>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
