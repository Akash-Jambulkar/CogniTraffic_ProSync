import React from 'react';
import MapComponent from '../Map/MapComponent';
import TrafficChart from '../Charts/TrafficChart';
import PieChart from '../Charts/PieChart';
import DifferenceChart from '../Charts/DifferenceChart';
import TrafficTable from '../Tables/TrafficTable';
import './App.css'; // Import a CSS file for styling

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Smart Traffic Management</h1>
        <TrafficTable />
      </div>
      <div className="main-content">
        <MapComponent />
        <TrafficChart />
        <PieChart />
        <DifferenceChart />
      </div>
    </div>
  );
}

export default App;
