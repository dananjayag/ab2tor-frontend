import {getToken} from '../../utils/storage';
import {CHECK_AND_VERIFY_TOKEN,UPDATE_TOKEN,AUTHENTICATE_WITH_GOOGLE,LOG_OUT} from './constants'
export function checkToken(){
    return {
        type: CHECK_AND_VERIFY_TOKEN,
        token : getToken()
    }
}

export function authenticateWithGoogle(token){
    return {
        type : AUTHENTICATE_WITH_GOOGLE,
        token
    }
}
export function updateToken(token){
    return {
        type:UPDATE_TOKEN,
        token
    }
}
export function logout(){
    return{
        type:LOG_OUT,
    }
}