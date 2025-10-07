import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components for the bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserComparisonChart = ({ data }) => {

  // Chart.js options for styling (dark theme)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We don't need a legend for a single dataset
      },
      title: {
        display: true,
        text: 'User vs. System Activity',
        color: '#ffffff',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#d1d5db',
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        ticks: {
          color: '#d1d5db',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  // Format the data from your API into the structure Chart.js expects
  const chartData = {
    labels: ['Your Logins', 'Total Users', 'Active Users'],
    datasets: [
      {
        label: 'Count',
        data: [data.userLogins, data.totalUsers, data.activeUsers],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',  // Blue
          'rgba(16, 185, 129, 0.7)', // Green
          'rgba(239, 68, 68, 0.7)',   // Red
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg h-96">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default UserComparisonChart;