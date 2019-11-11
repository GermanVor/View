import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/main.css'
 
class Menu extends  Component{
constructor(props){
    super(props);
    autoBind(this);
    this.state = { 
        ref : React.createRef(),
    }
}
componentWillMount(){}
    
render(){
    return (
        <div className='main'>
                main container is tomato color <br/> sdfghasdfgh
        </div>
    );
}
}

export default Menu