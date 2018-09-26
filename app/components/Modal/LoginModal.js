import React,{Component} from 'react';
import './LoginModal.scss';
import logo from '../Navbar/logo.png';
import {globalConfig} from '../../utils/constants';
import { GoogleLogin } from 'react-google-login';
export class LoginModal extends Component{
    componentDidMount(){
        let modalHolder = document.getElementById("modal");
        modalHolder && modalHolder.addEventListener('click',(event)=>{
                if(event.target == modalHolder){
                    this.props.close()
                }
        })
    }
    onSuccess = (token) =>{
        this.props.authenticateWithGoogle(token);
        this.props.close()
    }
    render(){
       let Id = globalConfig.GOOGLE_CLIENT_ID;
       let {isLoginForm} =this.props;
        return(
            
           <div id="modal" className={(isLoginForm)? "login-modal-container open tada  animated ":"login-modal-container"}>
                <div className="login-modal">
                    <div className="google">
                       <img  src={logo}/>
                        <GoogleLogin
                            clientId={Id}
                            buttonText={<span> Login with <i className="fa fa-google" aria-hidden="true"></i></span>}
                            className="google-button"
                            onSuccess={(token)=>{this.onSuccess(token)}}
                            onFailure={(e)=>{console.log("Failure",e)}}
                        />
                    </div>
                </div>
            </div>
        )
     }

 }