import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = props => (
  <Link to={props.path}>
    <button
      type="button"
      id={props.path}
      className={`btn btn-lg ${props.class} ${props.current === props.path ? 'db-active-panel' : ''}`}
      onClick={e => props.selectPanel(e)}
    >
      {props.name}
    </button>
  </Link>
);

export default Tabs;
