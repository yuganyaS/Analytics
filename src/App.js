import React, { Component } from 'react';
import './App.css';
import * as actions from './actions/homeactions';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Mainpage from './components/Mainpage';
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
        <Header />
        <NavigationBar />
        {/* <p className="App-intro">
          To get started,{this.props.info.name} edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Mainpage />
      </div>
    );
  }
}

export default connect(mapStateToProps,actions)(App);
