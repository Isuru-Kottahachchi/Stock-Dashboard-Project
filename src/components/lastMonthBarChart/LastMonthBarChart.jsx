import React from 'react';
import { Bar } from 'react-chartjs-2';


const LastMonthBarChart = () => {

    const data = {
        labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th"],
        datasets: [
            {
                label: 'Low value',
                backgroundColor: '#8A2BE2',
                borderColor: '#8A2BE2',
                borderWidth: 1,
                data: [5, 10, 15, 20, 25, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30],
            },
            {
                label: 'High Value',
                backgroundColor: '#2BEBC8',
                borderColor: '#2BEBC8',
                borderWidth: 1,
                data: [10, 15, 20, 25, 33, 10, 155, 22, 56, 30, 10, 15, 26, 29, 30, 101, 155, 120, 55, 39, 110, 15, 20, 25, 30, 10, 15, 20, 25, 30],
            },
        ],
    };

    const options = {
        responsive: true,
        barThickness: 10,
    };

    return (
        <div className='LastMonthBarChart' style={{ width: '780px', height: '400px',marginLeft: '10px',marginRight: '50px' }}>
            <h3>Last Month Min/Max Values</h3>
            <Bar data={data} options={options} />
        </div>
    )
}

export default LastMonthBarChart