import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/menu.css'
import { Link } from 'react-router-dom';
import mapMenu from '../components/mapMenu'
import Mode from './mode'
import Timer from './timer'

class Menu extends  Component{
    constructor(props){
        super(props);
        autoBind(this);
        this.state = { 
            ref : React.createRef(),
        }
        this.mapMenu = mapMenu;
    }
    componentDidMount(){
        let nav =  this.state.ref.current;//document.querySelector('nav#menu');
        let div = nav.querySelector('.menu-cover');
        
        div.style.transitionProperty = 'all';
        div.style.transitionDuration = '0.65s';

        nav.onmouseover = function(){ div.style.transform = 'translateX(0)'; };
        nav.onmouseout = false;
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
                    {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                        '' : 
                        <button className='pin-button' onClick={this.pin} >
                            <div className="pin img" pin='off'></div>
                        </button>
                    }
                    <Mode />
                    <ul className='menu-Ul'>
                        {this.mapMenu.map( (el, ind) => (
                                <li key={ind+'key'}>{
                                    el.name==='about'? <Link to={'/'}>{el.name}</Link> :
                                    <Link to={'/' + el.name }>{el.name}</Link>
                                }</li>
                        ) )}
                    </ul>
                    <Timer />
                </div>
            </nav>
        );
    }
}

export default Menu