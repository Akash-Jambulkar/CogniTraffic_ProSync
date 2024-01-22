// Importing necessary dependencies
import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto'; // Importing Chart.js for chart creation
import 'chartjs-plugin-datalabels'; // Importing Chart.js plugin for data labels
import './DifferenceChart.css'; // Importing DifferenceChart-specific styles

// DifferenceChart component definition
const DifferenceChart = () => {
  useEffect(() => {
    // Get the chart canvas element by its ID
    const ctx = document.getElementById('differenceChart').getContext('2d');
    
    // Variable to hold the Chart.js instance
    let chartInstance = null;

    // Function to create or update the chart
    const createOrUpdateChart = () => {
      // If the chart instance already exists, destroy it to avoid memory leaks
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create a new Chart.js instance with specified data and options
      chartInstance = new Chart(ctx, {
        type: 'bar', // Bar chart type
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // X-axis labels
          datasets: [
            {
              label: 'Difference', // Dataset label
              data: [10, -5, 8, -4, 6], // Example data for the chart
              backgroundColor: '#4CAF50', // Bar color
              borderColor: '#4CAF50', // Bar border color
              borderWidth: 1, // Border width
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
        },
      });
    };

    // Initial creation of the chart
    createOrUpdateChart();

    // Clean up function to destroy the chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // JSX to render the chart container and canvas
  return (
    <div className="chart-container">
      <h2>Traffic Volume Difference Chart</h2>
      <canvas id="differenceChart" width="400" height="200"></canvas>
    </div>
  );
};

// Exporting the DifferenceChart component for use in other parts of the application
export default DifferenceChart;
