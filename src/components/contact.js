import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/contact.css'

export class contact extends Component{
  constructor(props){
      super(props);
      autoBind(this);
      this.state = { 
          ref : React.createRef(),
      }
      this.links = [
        'https://vk.com/id230124085',
        'https://www.instagram.com/semen_lypin',
        'https://t.me/djorman',
        'vorotnikov.german@yandex.ru',
        'https://github.com/GermanVor'
      ]
  }
  copy(text){
    navigator.clipboard.writeText(text);
  } 

  render() {
    return (
      <section className='contact'>
        <h1 className='line'>Для связи со мной</h1>
        {this.links.map( (el, ind) => (
          <p key={ind+'key'}><a href={el} >{el} </a><button onClick={()=>this.copy(el)}>copy</button></p>
        ))}
        <p><a href="tel:8-994-422-4572" target="_blank" rel="noopener noreferrer" >8-994-422-4572 </a><button onClick={()=>this.copy('8-994-422-4572')}>copy</button></p>
        <div className="footerContactBar">
          <a href="https://vk.com/id230124085" >
            <img alt='' src={require('../style/img/vk.png')} className="VK"/>
          </a>
          <a href="https://www.instagram.com/semen_lypin/" className='unselectable'>
            <img alt='' src={require('../style/img/instagram.png')} className="inst"/>
          </a> 
          <a href="https://t.me/djorman" className='unselectable'>
            <img alt='' src={require('../style/img/telegram.png')} className="telegram"/>
          </a> 
        </div>
      </section>
    );
  }
}