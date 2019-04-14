import React, { Component } from 'react';
import classes from './App.css';
import LoginFrom from "./components/LoginForm/LoginForm";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className={classes.App}>
        <div>
          <Route path="/" exact component={LoginFrom}/>
          <Route path="/list" exact component={EmployeeList}/>
        </div> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
