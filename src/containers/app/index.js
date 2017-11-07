import React from 'react';
import Home from '../home';
import Leadspace from '../../components/leadspace';
import Navigation from '../navigation';
import About from '../../components/about';
import Gmail from '../panels/gmail';
import Photos from '../panels/photos';
import Drive from '../panels/drive';
import Facebook from '../panels/facebook';
import Search from '../panels/search';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="container">
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

export default App;
