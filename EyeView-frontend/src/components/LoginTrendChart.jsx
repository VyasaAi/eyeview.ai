import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// We need to register the components we are going to use with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LoginTrendChart = ({ data: loginTrendData }) => {

  // Chart.js options for styling (dark theme)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e5e7eb', // Text color for the legend
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Global Logins (Last 7 Days)',
        color: '#ffffff', // Text color for the title
        font: {
            size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#d1d5db', // Text color for x-axis labels
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Color of the grid lines
        },
      },
      y: {
        ticks: {
          color: '#d1d5db', // Text color for y-axis labels
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Color of the grid lines
        },
      },
    },
  };

  // Format the data from your API into the structure Chart.js expects
  const chartData = {
    labels: loginTrendData.map(item => new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
    datasets: [
      {
        label: 'Logins',
        data: loginTrendData.map(item => item.logins),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.2, // Makes the line slightly curved
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg h-96">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LoginTrendChart;