import React, { Component } from 'react';
import './App.css';
import Menu from './containers/menu'
import Main from './containers/main'

class App extends  Component{
  constructor(props){
      super(props);
      this.state = { 
          ref : React.createRef(),
      }
  }
  componentDidMount() {
    this.state.ref.current.style.height = document.querySelector('.main').offsetHeight + 'px';
  }
  render() {
    return (
      <div className="App" ref={this.state.ref}>
        <Menu />
        <Main />
      </div>
    );
  }
}
export default App;
