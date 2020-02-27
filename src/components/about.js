import React from 'react';
import '../style/about.css'

export const about = () => (
  <div className='about'>
    <div>
      <div className='left img-wrapper'>
        <img src={require('../style/img/me.jpg')} alt="German Vor" className="me"></img>
      </div>
      <p>
        Привер, меня зовут Герман. <br/> <br/>
        <br/>
        Я начинающий frontend разработчик, на данный момент получаю высшее техническое образование
        в <a href = 'https://etu.ru/' style={{whiteSpace:'nowrap'}}>СПБГЭТУ «ЛЭТИ»</a> - a.k Первый магический электротехнический, первенец отчизны гордость нашей жизни - по специальности Компьютерная безопасность. 
        Однако связывать свою профессиональную деятельность с чем то подобным не планирую. Программная разработка мне нравится куда больше. 
      </p>
    </div>
  </div>
)


