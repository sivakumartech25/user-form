import React,{ Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/reducer";
import classes from "./LoginForm.css";
import { Redirect } from 'react-router-dom';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    validationHandler = () => {
        
    }
    render(){

    let {email,password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;

    if(isLoginSuccess){
        return <Redirect to='/list'/>
    } else {
    let form = ( 
            <form name="loginform">
                <label className={classes.Label}>USERNAME:</label>
                <input 
                className={classes.inputElement}
                type="email" 
                name="email" 
                onChange={event => this.setState({email: event.target.value})} />
                <label>Password:</label>
                <input 
                className={classes.inputElement}
                type="password" 
                name="password" 
                onChange={event => this.setState({password: event.target.value})}/>
                <input type="submit" value="LOGIN" />
                { isLoginPending && <div>Please Wait...</div> }
                { isLoginSuccess && <div>success</div> }
                { loginError && <div>{loginError.message}</div>}
            </form>   
    );
    return(        
        <div className={classes.input} onSubmit={this.onSubmit} >
        {form}   
        </div>       
        );
    }
}

    onSubmit = (event) => {
        event.preventDefault();
        let {email,password} = this.state;
        this.props.login(email,password);
    }
}

const mapStateToProps = state => {
    return {
        isLoginPending: state.isloginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email,password))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);