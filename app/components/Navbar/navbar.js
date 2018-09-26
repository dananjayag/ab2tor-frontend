import React, { Component } from 'react';
import './navbar.scss';
import logo from './logo.png';
import {LoginModal} from '../Modal/LoginModal';
export class NavBar extends Component {
  constructor(){
    super();
    this.state={
      slider:false,
      isLoginForm:false,
    }
  }



  toggle = (e) =>{
     this.setState((prevState)=>{
       return({
       slider:!prevState.slider
     })})
  }
  logClick = (e) =>{
    (this.props.isloggedIn) ? this.logOutClick(): this.loginClick();
  }
  loginClick = (e) =>{
    this.setState({
      slider:false,
      isLoginForm:true
    })
  }
  logOutClick = (e) =>{
        console.log("Logged Out")
        localStorage.clear();
        this.props.logout()
  }

  close = (e) =>{
    this.setState({
      slider:false,
      isLoginForm:false
    })
  }
  render() {
    let {isloggedIn,location} = this.props;
    let {slider,isLoginForm} =this.state;
    let active ;
   
    
        if (location.pathname=='/about')
        {
          active="about"
        }
        else if (location.pathname =='/why'){
           active="why"
        }
        else{
          active="home";
        }
      


    return(
    <div className="navbar-custom">
            <ul>
              <li> <img src={logo}/></li>
              <li className={`berger ${(active=="home") ? "active" :""}`}> <a href="/"> Home </a>   </li>
              
              
              {!slider && <li className="hamberger pull-right" onClick={this.toggle}><i className="fa fa-bars"></i></li>}
              <li className="berger pull-right" onClick={this.logClick}> <a> {(isloggedIn) ? "Log out" : "Log in"} </a>  </li>
              <li className={`berger pull-right ${(active=="about") ? "active" :""}`}> <a href="/about"> About Us </a>   </li>
              <li className={`berger pull-right ${(active=="why") ? "active" :""}`}> <a href="/why"> Why t2tor ? </a>  </li>
              {
                slider && <div className="slider fadeInRight animated">
                    <div className="relative">
                      <li className="close-icon" onClick={this.toggle}><i className="fa fa-close" aria-hidden="true"></i></li>
                      </div>
                      <div className="container">
                        <ul>
                          <li onClick={this.logClick}> <a> {(isloggedIn) ? "Log out" : "Log in"} </a>  </li>
                          <li> <a href="/about"> About Us </a>   </li>
                          <li> <a href="/howItWorks"> How it works </a>   </li>
                          <li> <a href="stories"> Success Stories </a>  </li>
                          
                          </ul>
                      </div>
                   
                </div>
              }
            </ul>
            <LoginModal close={this.close} isLoginForm={isLoginForm} authenticateWithGoogle={this.props.authenticateWithGoogle}/>
    </div>
  )}
}
