import React from 'react';

import './Main.css';
import photo from '../../images/mainPhoto.jpg';

function Main() {
  return (
    <main className='main main_margin'>
      <section className='main__presentation'>
        <div className='title'>
          <h1 className='title__first'>Голосовые ассистенты</h1>
          <h1 className='title__second'>SmartDialogs</h1>
        </div>
        <div className='main__photo-block'>
          <img className='main__photo' src={photo} alt='main' />
        </div>
        <p className='main__description'>
          В звонках бот ведёт осмысленный диалог
          и совершенно неотличим от живого оператора.
          Автоматизируйте телефонные звонки с помощью ИИ.
        </p>
        <button type='button' className='main__button' name='sender'>Оставить заявку</button>
      </section>
      <section className='main__functions'>
        <div className='main__func-description'>
          <h2 className='main__func-label'>3 года на рынке</h2>
          <p className='main__func-text'>Более 1000 разработанных ботов в РФ и зарубежом</p>
        </div>
        <div className='main__func-description'>
          <h2 className='main__func-label'>Честная цена</h2>
          <p className='main__func-text'>Оплата только за использованные минуты</p>
        </div>
        <div className='main__func-description'>
          <h2 className='main__func-label'>Скорость</h2>
          <p className='main__func-text'>Запускаем проекты за 3 недели, не теряя в качестве</p>
        </div>
        <div className='main__func-description'>
          <h2 className='main__func-label'>Личный кабинет</h2>
          <p className='main__func-text'>Отслеживание результатов звонков в личном кабинете</p>
        </div>
      </section>
    </main>
  )
}

export default Main;