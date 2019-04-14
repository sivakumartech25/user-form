import Promise from "es6-promise";
import { push } from 'react-router-redux'

const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

function setLoginpending(isLoginPending){
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess){
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError){
    return {
        type: LOGIN_ERROR,
        loginError
    };
}

export function login(email,password){
    return dispatch => {
        dispatch(setLoginpending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendLoginRequest(email, password)
            .then(success => {
                dispatch(setLoginpending(false));
                dispatch(setLoginSuccess(true));
                dispatch(push('/list'));
            })
            .catch(err =>{
                dispatch(setLoginpending(false));
                dispatch(setLoginError(err));
            });
        };
    }

    export default function reducer(state ={
        isLoginPending:false,
        isLoginSuccess:false,
        loginError:null
    }, action){
        // eslint-disable-next-line default-case
        switch(action.type){
            case LOGIN_SUCCESS:
            return{
                ...state,
                isLoginSuccess:action.isLoginSuccess
            };
           case LOGIN_PENDING:
           return{
               ...state,
               isLoginPending: action.isLoginPending
           };
           case LOGIN_ERROR:
           return{
               ...state,
               loginError:action.loginError
           };
           default:
           return state;
        }
    }
    function sendLoginRequest(email, password){
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(email === "hruday@gmail.com" && password === "hruday123"){
                    return resolve(true);
                }else{
                    return reject(new Error("invalid email  or password"));
                }
            },1000)  
        });
    }