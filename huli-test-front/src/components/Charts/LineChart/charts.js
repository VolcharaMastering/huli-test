import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
    import {Chart, CategoryScale, PointElement, LineElement, LinearScale} from 'chart.js';

function Charts({ dates, data }) {
    Chart.register(CategoryScale);
    Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(LinearScale);
    const chartData = {
        labels: dates,
        datasets: [
            {
                label: 'Исходящие звонки',
                data: data,
                fill: false,
                borderColor: '#4F46E5',
                pointBackgroundColor: '#4F46E5',
                pointRadius: 4,
                tension: 0.4,
            },
            {
                label: 'Входящие звонки',
                data: data,
                fill: false,
                borderColor: '#EAA43A',
                pointBackgroundColor: '#EAA43A',
                pointRadius: 4,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                type: 'category',

                grid: {
                    display: false,
                },
            },
            y: {
                // type: 'category',
                grid: {
                    color: 'rgba(151, 151, 151, 0.1)',
                },
                ticks: {
                    color: '#979797',
                    font: {
                        size: 12,
                        weight: 300,
                    },
                },
            },
        },
    };

    return (
        <div>
            <div style={{ fontSize: '18px', fontWeight: 400, marginBottom: '10px' }}>Звонки</div>
            <Line data={chartData} options={chartOptions} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#4F46E5', width: '8px', height: '8px', borderRadius: '50%', marginRight: '5px' }}></div>
                    <div style={{ fontSize: '12px', fontWeight: 400, color: '#4F46E5' }}>Исходящие звонки</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#EAA43A', width: '8px', height: '8px', borderRadius: '50%', marginRight: '5px' }}></div>
                    <div style={{ fontSize: '12px', fontWeight: 400, color: '#EAA43A' }}>Входящие звонки</div>
                </div>
            </div>
        </div>
    );
}
export default Charts;