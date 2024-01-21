import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import './DifferenceChart.css'; // Import DifferenceChart-specific styles


const DifferenceChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('differenceChart').getContext('2d');
    let chartInstance = null;

    const createOrUpdateChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [
            {
              label: 'Difference',
              data: [10, -5, 8, -4, 6],
              backgroundColor: '#4CAF50',
              borderColor: '#4CAF50',
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'top',
              offset: 4,
              display: 'auto',
              color: 'black',
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
      <h2>Traffic Volume Difference Chart</h2>
      <canvas id="differenceChart" width="400" height="200"></canvas>
    </div>
  );
};

export default DifferenceChart;
