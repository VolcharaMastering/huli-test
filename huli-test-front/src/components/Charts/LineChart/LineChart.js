import React, { useEffect, useState } from 'react';
import Charts from './charts';
/* import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { getCalls } from '../../../utils/Api';

function LineChart({ startDate, endDate }) {
    ChartJS.register(CategoryScale);
    const [dates, setDates] = useState([]);
    useEffect(() => {
        getDatesInterval(startDate, endDate);
    }, [])
    // useEffect(() => {
    //     fakeData(dates);
    // }, [])

    const convertDateFormat = (dateStr) => {
        const [month, day] = dateStr.split('-');
        return `${day}.${month}`;
    }
    const getDatesInterval = (startDate, endDate) => {
        const gotDates = [];
        const currentDate = new Date(startDate);
        while (currentDate <= new Date(endDate)) {
            gotDates.push(convertDateFormat(new Date(currentDate).toJSON().slice(5, 10)));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        setDates(gotDates);
    } */
    // const fakeData = (dates) => {
    //     getCalls(dates)
    //         .then((res) => {
    //             console.log(res);
    //             return (res);
    //         })
    //         .catch((err) => {
    //             console.log("Что-то пошло не так! Попробуйте ещё раз.");
    //         })
    // }
   /*  const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Звонки',
                fontSize: 18,
            },
        },
    };
const incomingCalsData=dates.map(() => faker.datatype.number({ min: 1000, max: 2000, precision: 1 }));
console.log('FAKER',incomingCalsData)

    const labels = dates;
    const data = {
        labels,
        datasets: [
            {
                label: 'Исходящие звонки',
                data: [100, 200, 300],
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Входящие звонки',
                data: [100, 200, 300],
                borderColor: '#EAA43A',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    console.log(data.datasets) */
    function LineChart(){
    return (
        // <Line options={options} data={data} />
        <Charts dates={['02.04', '03.04', '04.04', '05.04']} data={[1024, 2048, 3020, 2020]} />
    );
}

export default LineChart;
