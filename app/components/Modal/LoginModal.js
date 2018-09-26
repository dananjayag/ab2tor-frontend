import React,{Component} from 'react';
import './LoginModal.scss';
import { GoogleLogin } from 'react-google-login';
import config from 'react-global-configuration';
export class LoginModal extends Component{
    componentDidMount(){
        let modalHolder = document.getElementById("modal");
        modalHolder && modalHolder.addEventListener('click',(event)=>{
                if(event.target == modalHolder){
                    this.props.close()
                }
        })
    }
    render(){
       let Id =  config.get("GOOGLE_CLIENT_ID");
       let {login} =this.props;
        return(
            
           <div id="modal" className={(login)? "login-modal-container open tada  animated ":"login-modal-container"}>
                <div className="login-modal">
                    <div className="google">
                        <GoogleLogin
                            clientId={Id}
                            buttonText="Login with Google"
                            className="google-button"
                            onSuccess={(e)=>{console.log(e)}}
                            onFailure={(e)=>{console.log("Failure",e)}}
                        />
                    </div>
                </div>
            </div>
        )
     }

 }