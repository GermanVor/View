import React, { Component } from 'react';
import './App.css';
import Main from './containers/main'

class App extends  Component{
  constructor(props){
      super(props);
      this.state = { 
          ref : React.createRef(),
      }
  }
  render() {
    return (
      <div className="App" ref={this.state.ref}>
        <Main />
      </div>
    );
  }
}
export default App;
