import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../style/contact.css'

export class contact extends Component{
  constructor(props){
      super(props);
      autoBind(this);
      this.state = { 
          ref : React.createRef(),
          links : [
            'https://vk.com/id230124085',
            'https://www.instagram.com/semen_lypin',
            'https://t.me/djorman',
            'vorotnikov.german@yandex.ru',
            'https://github.com/GermanVor'
          ],
      }
  }
  componentDidMount() {
    let copy = function(){
      let copyText = this.getAttribute('textCopy');
      navigator.clipboard.writeText(copyText);
    } 
    document.querySelectorAll('p > button').forEach( a => a.onclick = copy.bind(a) )
  }
  render() {
    return (
      <section className='contact'>
        <h1 className='line'>Для связи со мной</h1>
        {this.state.links.map( el => (
          <p><a href={el} >{el} <button textCopy = {el} >copy</button></a></p>
        ))}
        <p><a href="tel:8-952-202-9672" target="_blank" rel="noopener noreferrer" >8-952-202-9672</a></p>
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