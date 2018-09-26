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
import {makeSelectIsLogged,makeSelectLocation} from './selectors';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux'
import reducer from './reducer';
import saga from './saga';
import {checkToken,authenticateWithGoogle,logout} from './actions'

class App extends Component{
   constructor(){
       super();
   }
  
  componentDidMount(){
    this.props.checkToken();
  }
  render(){
  return (
            <div>

                <NavBar isloggedIn={this.props.isLoggedIn} logout={this.props.logout} authenticateWithGoogle={this.props.authenticateWithGoogle} location={this.props.location}/>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFoundPage} />
                  </Switch>

            </div>
          );
  }
}


export const   mapDispatchToProps = (dispatch) =>{
       return{
        checkToken : evt => dispatch(checkToken()),
        authenticateWithGoogle : (token) =>{
            dispatch(authenticateWithGoogle(token))
        },
        logout : evt => dispatch(logout())
       }
   
}

export const mapStatetoProps = createStructuredSelector({
    isLoggedIn : makeSelectIsLogged(),
    location : makeSelectLocation()
})
const withConnect = connect(mapStatetoProps,mapDispatchToProps);

const withReducer = injectReducer({key:'global',reducer});
const withSaga =injectSaga({key:'globalSaga' ,saga} )

export default compose(withReducer,withSaga,withConnect)(App)