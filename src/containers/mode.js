import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/mode.css'

class Mode extends Component{
  constructor(props){
      super(props);
      autoBind(this);
      this.state = { 
          ref : React.createRef(),
      }
  }
  render(){
    return (
      <div id='mode' ref={this.state.ref} > 
        <div className="button-cover">
          <div className="button b2" id="button-10">
            <input type="checkbox" className="checkbox"/>
            <div className="knobs">
              <span>YES</span>
            </div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mode