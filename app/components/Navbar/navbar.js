import React, { Component } from 'react';
import './navbar.scss';
import logo from './logo.png';
import {LoginModal} from '../Modal/LoginModal';
export class NavBar extends Component {
  constructor(){
    super();
    this.state={
      slider:false,
      loginForm:false
    }
  }

  toggle = (e) =>{
     this.setState((prevState)=>{
       return({
       slider:!prevState.slider
     })})
  }
  loginClick = (e) =>{
    this.setState({
      slider:false,
      loginForm:true
    })
  }

  close = (e) =>{
    this.setState({
      slider:false,
      loginForm:false
    })
  }
  render() {
    let {login} = this.props;
    let {slider,loginForm} =this.state;
    return(
    <div className="navbar-custom">
            <ul>
              <li> <img src={logo}/></li>
              <li className="berger active"> <a href="/howItWorks"> How it works </a>   </li>
              <li className="berger"> <a href="stories"> Success Stories </a>  </li>
              
              {!slider && <li className="hamberger pull-right" onClick={this.toggle}><i className="fa fa-bars"></i></li>}
              <li className="berger pull-right" onClick={this.loginClick}> <a> {(login) ? "Log out" : "Log in"} </a>  </li>
              <li className="berger pull-right"> <a href="/about"> About Us </a>   </li>
              {
                slider && <div className="slider fadeInRight animated">
                    <div className="relative">
                      <li className="close-icon" onClick={this.toggle}><i className="fa fa-close" aria-hidden="true"></i></li>
                      </div>
                      <div className="container">
                        <ul>
                          <li onClick={this.loginClick}> <a> {(login) ? "Log out" : "Log in"} </a>  </li>
                          <li> <a href="/about"> About Us </a>   </li>
                          <li> <a href="/howItWorks"> How it works </a>   </li>
                          <li> <a href="stories"> Success Stories </a>  </li>
                          
                          </ul>
                      </div>
                   
                </div>
              }
            </ul>
            <LoginModal close={this.close} login={loginForm}/>
    </div>
  )}
}
