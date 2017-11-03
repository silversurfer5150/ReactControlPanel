import React from 'react';
import Home from '../home';
import Leadspace from '../leadspace';
import Navigation from '../navigation';
import About from '../about';
import Gmail from '../panels/gmail';
import Photos from '../panels/photos';
import Drive from '../panels/drive';
import Facebook from '../panels/facebook';
import Search from '../panels/search';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = props => (
  <div className={`container ${props.panelType}`}>
    <header>
      <Leadspace />
      <Navigation />
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/gmail" component={Gmail} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/drive" component={Drive} />
      <Route exact path="/facebook" component={Facebook} />
      <Route exact path="/search" component={Search} />
    </main>
  </div>
);

const mapStateToProps = state => ({
  panelType: state.panel.panelType,
});

export default connect(mapStateToProps)(App);
