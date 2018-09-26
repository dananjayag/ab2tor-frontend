/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {NavBar} from 'components/Navbar/navbar';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import config from 'react-global-configuration';
import configJson from '../../config.json';
export default class App extends Component{

  componentWillMount(){
    config.set(configJson)
  }
  render(){
  return (
    <div>

      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
}
