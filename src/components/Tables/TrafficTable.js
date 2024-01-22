// Importing React and TrafficTable-specific styles
import React from 'react';
import './trafficTable.css';

// TrafficTable component definition
const TrafficTable = () => {
  // Sample traffic data
  const trafficData = [
    { id: 1, location: 'Intersection A', status: 'Normal' },
    { id: 2, location: 'Intersection B', status: 'Congested' },
    { id: 3, location: 'Intersection C', status: 'Normal' },
    { id: 4, location: 'Intersection D', status: 'Congested' },
    { id: 5, location: 'Intersection E', status: 'Normal' },
  ];

  // JSX to render the traffic table
  return (
    <div className="table-container">
      <h2>Traffic Data Table</h2>
      {/* Table structure for displaying traffic data */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through trafficData to render rows in the table */}
          {trafficData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.location}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exporting the TrafficTable component for use in other parts of the application
export default TrafficTable;
