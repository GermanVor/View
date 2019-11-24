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
    let dark = document.querySelector('link[mode=dark]');
    let light = document.querySelector('link[mode=light]');
    if( dark && light ){
      if(light.hasAttribute('disabled') ){
        light.removeAttribute('disabled');
        dark.setAttribute('disabled','disabled');
      } else {
        dark.removeAttribute('disabled');
        light.setAttribute('disabled','disabled');
      }
    }
  }
  componentDidMount() { 
    if(!document.querySelector('link[mode=dark]').hasAttribute('disabled')){
      this.state.ref.current.querySelector('.checkbox').click(); 
    }
  }
  render(){
    return (
      <div id='mode' ref={this.state.ref} > 
        <div className="button-cover">
          <div className="button b2" id="button-10">
            <input type="checkbox" className="checkbox" onChange={this.toggle} />
            <div className="knobs" mode='dark'>
              <span>Light</span>
            </div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mode