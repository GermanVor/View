import React from 'react';
import '../style/contact.css'

export const contact = ()=> (
  <section className='contact'>
      <h1 className='line'>Для связи со мной</h1>
      <p>https://vk.com/im?sel=263370028</p>
      <p>https://www.instagram.com/semen_lypin/</p>
      <p>https://web.tlgrm.eu/#/im?p=@lur1e</p>
      <p>vorotnikov.german@yandex.ru</p>
      <p><a href="tel:8-952-202-9672" aria-label="Звоните в любое время" target="_blank" rel="noopener noreferrer">8-952-202-9672</a></p>
      <div className="footerBar unselectable">
        <a href="https://vk.com/id230124085" className='unselectable'>
          <img alt='' src={require('../style/img/vk.png')} className="VK"/>
        </a>
        <a href="https://www.instagram.com/semen_lypin/" className='unselectable'>
          <img alt='' src={require('../style/img/instagram.png')} className="inst"/>
        </a> 
        <a href="https://web.tlgrm.eu/#/im?p=@lur1e" className='unselectable'>
          <img alt='' src={require('../style/img/telegram.png')} className="telegram"/>
        </a> 
      </div>
  </section>
)