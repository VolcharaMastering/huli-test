import React from 'react';
import './Charts.css';

import chartOne from '../../images/Temp-Graph_line chart.png';
import chartTwo from '../../images/Temp-Graph_column chart.png';

function Charts() {
  return (
    <section className='charts'>
      <div className='charts__info'>
        <h2 className='subtitle'>Вся аналитика 
        <br />в одном кабинете</h2>
        <p className='charts__description charts__description_left-margin'>
          Уникальные виджеты позволяют настроить
          дашборд под задачи различных подразделений
          вашей компании
        </p>
        <div className='charts__lineChart'>
          <img className='image' src={chartOne} alt='graph' />
        </div>
      </div>
      <div className='charts__info charts__info_margin'>
        <p className='charts__description charts__description_right-margin'>
          Отслеживайте работу голосового ассистента
          в личном кабинете
        </p>
        <div className='charts__lineChart'>
          <img className='image' src={chartTwo} alt='graph' />
        </div>
      </div>
    </section>
  )
}

export default Charts;