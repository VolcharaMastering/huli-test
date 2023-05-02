import React, { useEffect, useState } from 'react';
import './ChartsWindow.css';

import Chart from './LineChart/LineChart';
import DateMenu from './DateMenu/DateMenu';
import LineChart from './LineChart/LineChart';

function ChartsWindow() {
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toJSON().slice(0, 10)
  ); // week ago
  const [endDate, setEndDate] = useState(new Date().toJSON().slice(0, 10)); // today
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStartDateChange = (date) => {
    const formattedDate = date.toJSON().slice(0, 10);
    setStartDate(formattedDate);
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date.toJSON().slice(0, 10);
    setEndDate(formattedDate);
  };

  const toogleChooseDate = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect(() => {
  //   console.log("Dates", startDate, endDate, menuOpen);
  // }, [startDate, endDate, menuOpen])
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
          <button
            className='charts__date'
            type="button"
            onClick={toogleChooseDate}
            aria-label="open date menu"
          ></button>
          {menuOpen &&
            <DateMenu
              startDate={startDate}
              endDate={endDate}
              handleStartDateChange={handleStartDateChange}
              handleEndDateChange={handleEndDateChange}
            />
          }
          <LineChart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
      <div className='charts__info charts__info_margin'>
        <p className='charts__description charts__description_right-margin'>
          Отслеживайте работу голосового ассистента
          в личном кабинете
        </p>
        <div className='charts__lineChart'>

        </div>
      </div>
    </section>
  )
}

export default ChartsWindow;