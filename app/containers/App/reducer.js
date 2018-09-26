import {fromJS} from 'immutable';
import {UPDATE_TOKEN,LOG_OUT} from './constants';
const intialState = fromJS({
    isloggedIn:false,
    token :null
})

function reducer(state=intialState , action ) {

    switch(action.type){
           case UPDATE_TOKEN :{
                return state.set('isloggedIn',true)
                        .set('token',action.token)
           }
           case LOG_OUT :{
            return state.set('isloggedIn',false)
                        .set('token',null)
           }
           default : {
                return state;
           }

    }
   
}

export default reducer;