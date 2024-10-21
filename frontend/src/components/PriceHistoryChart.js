import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceHistoryChart = ({ priceHistory }) => {
  // Extract prices and dates from priceHistory array
  const prices = priceHistory.map((entry) => entry.price);
  const dates = priceHistory.map((entry) => new Date(entry.checkedAt).toLocaleDateString());

  // Chart.js configuration for the line chart
  const data = {
    labels: dates,  // X-axis: Dates
    datasets: [
      {
        label: 'Price (₹)',
        data: prices,  // Y-axis: Prices
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,  // Line smoothness
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Price History',
      },
    },
  };

  return (
    <div className="price-history-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceHistoryChart;
