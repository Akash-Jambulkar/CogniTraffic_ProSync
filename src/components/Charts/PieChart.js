import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import './PieChart.css'; // Import PieChart-specific styles


const PieChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('pieChart').getContext('2d');
    let chartInstance = null;

    const createOrUpdateChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Normal', 'Congested'],
          datasets: [
            {
              data: [3, 2],
              backgroundColor: ['#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          plugins: {
            datalabels: {
              formatter: (value, context) => {
                const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                const percentage = ((value / total) * 100).toFixed(2) + '%';
                return percentage;
              },
              color: 'white',
              anchor: 'end',
              align: 'start',
              offset: -4,
            },
          },
        },
      });
    };

    createOrUpdateChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <h2>Traffic Status Pie Chart</h2>
      <canvas id="pieChart" width="400" height="200"></canvas>
    </div>
  );
};

export default PieChart;
