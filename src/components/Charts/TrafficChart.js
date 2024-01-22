// Importing necessary dependencies
import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto'; // Importing Chart.js for chart creation
import 'chartjs-plugin-datalabels'; // Importing Chart.js plugin for data labels
import 'chartjs-plugin-annotation'; // Importing Chart.js plugin for annotations

// TrafficChart component definition
const TrafficChart = () => {
  useEffect(() => {
    // Get the chart canvas element by its ID
    const ctx = document.getElementById('trafficChart').getContext('2d');
    
    // Variable to hold the Chart.js instance
    let chartInstance = null;

    // Function to create or update the line chart
    const createOrUpdateChart = () => {
      // If the chart instance already exists, destroy it to avoid memory leaks
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create a new Chart.js instance with specified data and options
      chartInstance = new Chart(ctx, {
        type: 'line', // Line chart type
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // X-axis labels
          datasets: [
            {
              label: 'Traffic Volume', // Dataset label
              data: [50, 75, 60, 80, 70], // Example data for the chart
              borderColor: 'rgba(75,192,192,1)', // Line color
              borderWidth: 2, // Line width
              pointBackgroundColor: 'rgba(75,192,192,1)', // Point color
              fill: false, // Do not fill the area under the line
            },
          ],
        },
        options: {
          // Chart.js options
          plugins: {
            datalabels: {
              anchor: 'end', // Position of the data labels
              align: 'top', // Alignment of the data labels
              offset: 4, // Offset from the data points
              display: 'auto', // Display data labels automatically
              color: 'black', // Color of the data labels
            },
          },
          annotation: {
            // Chart.js annotation plugin options
            annotations: [
              {
                type: 'line', // Type of annotation (line)
                mode: 'horizontal', // Annotation line mode (horizontal)
                scaleID: 'y-axis-0', // Scale ID for the y-axis
                value: 70, // Value at which the line is drawn
                borderColor: 'red', // Line color
                borderWidth: 2, // Line width
                label: {
                  content: 'Threshold', // Label text
                  enabled: true, // Display the label
                  position: 'right', // Position of the label
                },
              },
            ],
          },
        },
      });
    };

    // Initial creation of the line chart
    createOrUpdateChart();

    // Clean up function to destroy the chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // JSX to render the line chart container and canvas
  return (
    <div className="chart-container">
      <h2>Traffic Data Line Chart</h2>
      <canvas id="trafficChart" width="400" height="200"></canvas>
    </div>
  );
};

// Exporting the TrafficChart component for use in other parts of the application
export default TrafficChart;
