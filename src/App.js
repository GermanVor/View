import React, { Component } from 'react';
import './App.css';
import Main from './containers/main'

class App extends  Component{
  constructor(props){
      super(props);
      this.timeCheck = this.timeCheck.bind(this);
      this.state = { 
          ref : React.createRef(),
          timerId : setInterval(this.timeCheck, 60*1000*1000)
      }
      
  }
  componentWillMount() {}
  timeCheck() {
    let hours = new Date().getHours();
    if( hours > 18 || hours < 6 ){
      console.log('ночной режим')
    }

  }
  render() {
    return (
      <div className="App" ref={this.state.ref}>
        <Main />
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>
        awesrgdtfhygerty<br/>awesrgdtfhygerty<br/>

      </div>
    );
  }
}

export default App;
