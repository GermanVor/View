import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/menu.css'
import { Link } from 'react-router-dom';
import mapMenu from '../components/mapMenu'
import Mode from './mode'

class Menu extends  Component{
    constructor(props){
        super(props);
        autoBind(this);
        this.state = { 
            ref : React.createRef(),
            arrLi : [],
            mapMenu : mapMenu
        }
    }
    componentDidMount(){
        let nav =  document.querySelector('nav#menu');
        let div = nav.querySelector('.menu-cover');
        
        div.style.transitionProperty = 'all';
        div.style.transitionDuration = '0.65s';

        nav.onmouseover = function(){ div.style.transform = 'translateX(0)'; };
        nav.onmouseout = false;//function(){ div.style.transform = 'translateX(-100%)'; }
    }  
    pin() {
        let nav = this.state.ref.current;
        
        if( nav.onmouseout ) {
            nav.onmouseout = false;
            nav.querySelector('div.img').setAttribute('pin', 'off');

        } else {
            nav.onmouseout = function(){ 
                nav.querySelector('.menu-cover').style.transform = 'translateX(-100%)';
            };
            nav.querySelector('div.img').setAttribute('pin', 'on');
        }
    }
    render(){
        return (
            <nav id='menu' className='unselectable' ref={this.state.ref} key='Menu'>
                <div className='menu-cover' >
                    <button className='pin-button' onClick={this.pin} >
                        <div className="pin img" pin='off'></div>
                    </button>
                    <Mode />
                    <ul className='menu-Ul'>
                        {this.state.mapMenu.map( el => (
                                <li><Link to={'/' + el.name }>{el.name}</Link></li>
                        ) )}
                        {/* <li><a href='https://vk.com/wmwll'>Пряничек</a></li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu