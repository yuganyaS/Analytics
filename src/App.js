import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/homeactions';
import {connect} from 'react-redux';

function mapStateToProps(state){
  return{
    info:state.homedata
  }
}

class App extends Component {
  componentWillMount(){
    this.props.getdata();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started,{this.props.info.name} edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps,actions)(App);
