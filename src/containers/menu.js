import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/menu.css'
 
class Menu extends  Component{
constructor(props){
    super(props);
    autoBind(this);
    this.state = { 
        ref : React.createRef(),
        arrLi : [],
    }
}
componentDidMount(){
    let nav =  document.querySelector('nav.menu');
    let div = nav.querySelector('div');
    console.dir(div.clientWidth)
    div.style.transitionProperty = 'all';
    div.style.transitionDuration = '0.8s';

    nav.onmouseover = function(){ div.style.transform = 'translateX(0)'; };
    nav.onmouseout = function(){ div.style.transform = 'translateX(-100%)'; };
    
    this.setState({
        arrLi : [
            {titel : 'Work'},
            {titel : 'About', href : 'https://github.com/GermanVor'},
            {titel : 'Супер милый пупсичка',  href : 'https://vk.com/wmwll'},
            {titel : 'Contact'},
            {titel : 'Shop'},
        ]
    });
}
    
render(){
    return (
        <nav className='menu unselectable' ref={this.state.ref}>
            <div>
                <ul className='menu-Ul'>
                    {this.state.arrLi.map( el => (
                            <li><a href={el.href || '#'} target="_blank">{el.titel}</a></li>
                    ) )}
                </ul>
            </div>
        </nav>
    );
}
}

export default Menu