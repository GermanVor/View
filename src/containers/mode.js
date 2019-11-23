import React, { Component } from 'react';
import '../style/mode.css'

class Mode extends Component{
  constructor(props){
    super(props);
    this.state = { 
        ref : React.createRef(),
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    console.log(1111)
  }
  render(){
    return (
      <div id='mode' ref={this.state.ref} > 
        <div className="button-cover">
          <div className="button b2" id="button-10">
            <input type="checkbox" className="checkbox" onChange={this.toggle} />
            <div className="knobs">
              <span>DAY</span>
            </div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mode