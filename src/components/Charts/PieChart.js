// Importing necessary dependencies
import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto'; // Importing Chart.js for chart creation
import 'chartjs-plugin-datalabels'; // Importing Chart.js plugin for data labels
import './PieChart.css'; // Importing PieChart-specific styles

// PieChart component definition
const PieChart = () => {
  useEffect(() => {
    // Get the chart canvas element by its ID
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    // Variable to hold the Chart.js instance
    let chartInstance = null;

    // Function to create or update the pie chart
    const createOrUpdateChart = () => {
      // If the chart instance already exists, destroy it to avoid memory leaks
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create a new Chart.js instance with specified data and options
      chartInstance = new Chart(ctx, {
        type: 'pie', // Pie chart type
        data: {
          labels: ['Normal', 'Congested'], // Labels for the pie chart segments
          datasets: [
            {
              data: [3, 2], // Example data for the chart
              backgroundColor: ['#36A2EB', '#FFCE56'], // Colors for each segment
            },
          ],
        },
        options: {
          // Chart.js options
          plugins: {
            datalabels: {
              formatter: (value, context) => {
                // Custom label formatter to display percentage values
                const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                const percentage = ((value / total) * 100).toFixed(2) + '%';
                return percentage;
              },
              color: 'white', // Color of the data labels
              anchor: 'end', // Position of the data labels
              align: 'start', // Alignment of the data labels
              offset: -4, // Offset from the pie chart
            },
          },
        },
      });
    };

    // Initial creation of the pie chart
    createOrUpdateChart();

    // Clean up function to destroy the chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // JSX to render the pie chart container and canvas
  return (
    <div className="chart-container">
      <h2>Traffic Status Pie Chart</h2>
      <canvas id="pieChart" width="400" height="200"></canvas>
    </div>
  );
};

// Exporting the PieChart component for use in other parts of the application
export default PieChart;
