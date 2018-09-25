import React, { Component } from 'react';
import './navbar.scss';
import logo from './logo.png';
export class NavBar extends Component {
  constructor(){
    super();
    this.state={
      slider:false
    }
  }

  toggle = (e) =>{
     this.setState((prevState)=>{
       return({
       slider:!prevState.slider
     })})
  }
  render() {
    let {login,loginClick} = this.props;
    let {slider} =this.state;
    return(
    <div className="navbar-custom">
            <ul>
              <li> <img src={logo}/></li>
              <li className="berger active"> <a href="/howItWorks"> How it works </a>   </li>
              <li className="berger"> <a href="stories"> Success Stories </a>  </li>
              
              {!slider && <li className="hamberger pull-right" onClick={this.toggle}><i className="fa fa-bars"></i></li>}
              <li className="berger pull-right" onClick={loginClick}> <a> {(login) ? "Log out" : "Log in"} </a>  </li>
              <li className="berger pull-right"> <a href="/about"> About Us </a>   </li>
              {
                slider && <div className="slider fadeInRight animated">
                    <div className="relative">
                      <li className="close-icon" onClick={this.toggle}><i className="fa fa-close" aria-hidden="true"></i></li>
                      </div>
                      <div className="container">
                        <ul>
                          <li onClick={loginClick}> <a> {(login) ? "Log out" : "Log in"} </a>  </li>
                          <li> <a href="/about"> About Us </a>   </li>
                          <li> <a href="/howItWorks"> How it works </a>   </li>
                          <li> <a href="stories"> Success Stories </a>  </li>
                          
                          </ul>
                      </div>
                   
                </div>
              }
            </ul>
    </div>
  )}
}
