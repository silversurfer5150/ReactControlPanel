import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div className="container theme-showcase">
    <header>
      <div className="jumbotron">
        <h1>Jumbotron</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>
          <a className="btn btn-primary btn-lg">Learn more</a>
        </p>
      </div>
      <Link href="/" to="/">
        HomePage
      </Link>
      <Link href="/" to="/about-us">
        About Us
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
