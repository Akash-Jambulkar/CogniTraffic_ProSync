import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-annotation';


const TrafficChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    let chartInstance = null;

    const createOrUpdateChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [
            {
              label: 'Traffic Volume',
              data: [50, 75, 60, 80, 70],
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(75,192,192,1)',
              fill: false,
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
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 70,
                borderColor: 'red',
                borderWidth: 2,
                label: {
                  content: 'Threshold',
                  enabled: true,
                  position: 'right',
                },
              },
            ],
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
      <h2>Traffic Data Line Chart</h2>
      <canvas id="trafficChart" width="400" height="200"></canvas>
    </div>
  );
};

export default TrafficChart;
