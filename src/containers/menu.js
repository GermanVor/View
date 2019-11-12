import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/menu.css'
import { Link } from 'react-router-dom';
import mapMenu from '../components/mapMenu'

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
        div.style.transitionDuration = '0.8s';

        nav.onmouseover = function(){ div.style.transform = 'translateX(0)'; };
        nav.onmouseout = function(){ div.style.transform = 'translateX(-100%)'; };
        
    }
        
    render(){
        console.log(this.state.mapMenu)
        return (
            <nav className='menu unselectable' ref={this.state.ref}>
                <div>
                    <ul className='menu-Ul'>
                        {this.state.mapMenu.map( el => (
                                <li><Link to={'/' + el.name }>{el.name}</Link></li>
                        ) )}
                        <li><a href='https://vk.com/wmwll'>Самая милая девочка на планете</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu