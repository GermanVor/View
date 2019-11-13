import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/main.css'
import Menu from './menu'
import Mode from './mode'

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
    render(){
        return (
            <div id='main' className='raz' ref={this.state.ref}>
                <HashRouter>
                    <Menu />
                    <Switch>
                        {this.state.mapMenu.map( el => (
                            <Route path={'/' + el.name } component={ el.ReactModule }/>
                        ))}
                    </Switch>
                    
                </HashRouter>
            </div>
        );
    }
}

export default Main