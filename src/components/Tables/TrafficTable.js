import React from 'react';
import './trafficTable.css'; // Import TrafficTable-specific styles

const TrafficTable = () => {
  const trafficData = [
    { id: 1, location: 'Intersection A', status: 'Normal' },
    { id: 2, location: 'Intersection B', status: 'Congested' },
    { id: 3, location: 'Intersection C', status: 'Normal' },
    { id: 4, location: 'Intersection D', status: 'Congested' },
    { id: 5, location: 'Intersection E', status: 'Normal' },
  ];

  return (
    <div className="table-container">
      <h2>Traffic Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
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

export default TrafficTable;
