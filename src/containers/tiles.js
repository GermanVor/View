import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/tiles.css'

class Tiles extends Component{
  constructor(props){
      super(props);
      autoBind(this);
      this.state = { 
          ref : React.createRef(),
      }
  }
  render(){
    return (
      <div id='tiles' ref={this.state.ref} > 
        
      </div>
    );
  }
}

export default Tiles