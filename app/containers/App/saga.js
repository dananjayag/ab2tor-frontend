import { call, put, select, takeLatest } from 'redux-saga/effects';
import  request from '../../utils/request';
import {globalConfig} from '../../utils/constants';
import {updateToken} from './actions'
import {CHECK_AND_VERIFY_TOKEN,AUTHENTICATE_WITH_GOOGLE} from './constants';
import {setToken} from '../../utils/storage'
const BASE_URL = globalConfig.BASE_URL;

function *verifyToken (action){
    if(!!action.token)
    {
        let url = `${BASE_URL}/api/verify`;
        yield put(updateToken(action.token))
    }
   
}

function *authenticateGoogle (action) {
    setToken(action.token)
    yield put(updateToken(action.token))
}


export default function* globalSaga(){
    yield takeLatest(CHECK_AND_VERIFY_TOKEN, verifyToken);
    yield takeLatest(AUTHENTICATE_WITH_GOOGLE,authenticateGoogle);
}