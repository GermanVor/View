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
    //плохая практика использовать css селекторы , лень рефакторить - работает и ладно 
    let dark = document.querySelector('link[mode=dark]');
    let light = document.querySelector('link[mode=light]');

    if(!light){
      document.querySelector('head').insertAdjacentHTML('beforeend',
       '<link rel="stylesheet" href="./light.css" onload="document.documentElement.style.display = ``" mode="light" media="all">'
      );
    }
    if(!dark){
      document.querySelector('head').insertAdjacentHTML('beforeend',
      '<link rel="stylesheet" href="./dark.css" onload="document.documentElement.style.display = ``" mode="dark" media="all">'
      );
    }

    dark = document.querySelector('link[mode=dark]');
    light = document.querySelector('link[mode=light]');

    if( dark && light ){
      let a = document.querySelector('div.knobs');
      if( a.getAttribute('mode') == 'dark' ){
        light.removeAttribute('disabled');
        dark.setAttribute('disabled','disabled');
        a.removeAttribute('mode');
        a.setAttribute('mode', 'light'); console.log('light')
      } else {
        dark.removeAttribute('disabled');
        light.setAttribute('disabled','disabled');
        a.removeAttribute('mode');
        a.setAttribute('mode', 'dark'); console.log('dark')
      }
    } 
  }
  componentDidMount() { 
    if(document.querySelector('link[mode=dark]') && !document.querySelector('link[mode=dark]').hasAttribute('disabled')){
      this.state.ref.current.querySelector('.checkbox').click(); 
    }
  }
  render(){
    return (
      <div id='mode' ref={this.state.ref} > 
        <div className="button-cover">
          <div className="button b2" id="button-10">
            <input type="checkbox" className="checkbox" onChange={this.toggle} />
            <div className="knobs" mode='light'>
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