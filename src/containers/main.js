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
            flag : false,
            mapMenu : mapMenu
        }
    }
    
    handl() {
        this.setState( { flag: !this.state.flag } )
    }
    render(){
        return (
            <div className='main raz' ref={this.state.ref}>
                <HashRouter>
                    <Menu />
                    <Switch>
                        {this.state.mapMenu.map( el => (
                            <Route path={'/'+el.name} component={ el.ReactModule }/>
                        ))}
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Main