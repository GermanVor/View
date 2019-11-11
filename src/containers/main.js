import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/main.css'
 
class Menu extends  Component{
    constructor(props){
        super(props);
        autoBind(this);
        this.state = { 
            ref : React.createRef(),
            flag : false
        }
    }
    componentWillMount(){
        
    }
    handl() {
        this.setState( { flag: !this.state.flag } )
    }
    render(){
        return (
            <div className='main' ref={this.state.ref}>
                <button onClick={this.handl}>aaaa</button>
                { this.state.flag && <div> main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/> </div> }
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
                main container is tomato color <br/> sdfghasdfgh <br/>
             
            </div>
        );
    }
}

export default Menu