import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/main.css'
import Menu from './menu'

import { 
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import mapMenu from '../components/mapMenu'

class Main extends  Component{
    constructor(props){
        super(props);
        autoBind(this);
        this.state = { 
            ref : React.createRef(),
            mapMenu : mapMenu,
        }
    }
    componentDidMount(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.state.ref.current.style.paddingRight = '10px';
            this.state.ref.current.style.textAlign = 'justify';
        }
    }
    render(){
        return (
            <div id='main' className='raz' ref={this.state.ref} key='Main' >
                <HashRouter>
                    <Menu/>
                    <Switch  >
                        {this.state.mapMenu.map( (el, ind) => (
                            el.name==='about' ? <Route key={ind} exact path={'/'} component={ el.ReactModule }/>:
                             <Route key={ind} path={'/' + el.name } component={ el.ReactModule }/>
                        ))}
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Main