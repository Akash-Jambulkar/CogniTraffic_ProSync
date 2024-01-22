// Importing React and necessary components
import React from 'react';
import MapComponent from '../Map/MapComponent';
import TrafficChart from '../Charts/TrafficChart';
import PieChart from '../Charts/PieChart';
import DifferenceChart from '../Charts/DifferenceChart';
import TrafficTable from '../Tables/TrafficTable';
import './App.css'; // Import a CSS file for styling

// Main application component
function App() {
  return (
    // Main container for the entire application
    <div className="app-container">
      
      {/* Sidebar section */}
      <div className="sidebar">
        {/* Heading for the application */}
        <h1>Smart Traffic Management</h1>

        {/* TrafficTable component for displaying tabular data */}
        <TrafficTable />
      </div>

      {/* Main content section */}
      <div className="main-content">
        {/* MapComponent for displaying a map */}
        <MapComponent />

        {/* TrafficChart for visualizing traffic data */}
        <TrafficChart />

        {/* PieChart for displaying data in a pie chart */}
        <PieChart />

        {/* DifferenceChart for visualizing the difference in data */}
        <DifferenceChart />
      </div>
    </div>
  );
}

// Exporting the App component for use in other parts of the application
export default App;
