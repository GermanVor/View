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
        let nav =  document.querySelector('nav.menu');
        let div = nav.querySelector('div');
        
        div.style.transitionProperty = 'all';
        div.style.transitionDuration = '0.65s';

        nav.onmouseover = function(){ div.style.transform = 'translateX(0)'; };
        nav.onmouseout = function(){ div.style.transform = 'translateX(-100%)'; };
        
    }  
    render(){
        return (
            <nav className='menu unselectable' ref={this.state.ref}>
                <div>
                    <Mode />
                    <ul className='menu-Ul'>
                        <li><a href='https://vk.com/wmwll'>Пряничек</a></li>
                        {this.state.mapMenu.map( el => (
                                <li><Link to={'/' + el.name }>{el.name}</Link></li>
                        ) )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu