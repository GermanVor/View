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
    let ul = nav.querySelector('ul');
    
    ul.style.transitionProperty = 'all';
    ul.style.transitionDuration = '0.7s';

    nav.onmouseover = function(){ ul.style.right = 0 };
    //nav.onmouseout = function(){ ul.style.right = '100%' };

    
    

    this.setState({
        arrLi : [
            {titel : 'Work'},
            {titel : 'About'},
            {titel : 'Story'},
            {titel : 'Contact'},
            {titel : 'Shop'},
        ]
    });
}
    
render(){
    return (
        <nav className='menu'>
            <ul className='menu-Ul'>
                {this.state.arrLi.map( el => (
                        <li><a href='#'>{el.titel}</a></li>
                ) )}
            </ul>
        </nav>
    );
}
}

export default Menu