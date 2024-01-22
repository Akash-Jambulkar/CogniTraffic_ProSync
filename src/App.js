// Importing necessary dependencies and styles
import React from 'react';
import logo from './logo.svg';
import './App.css';

// Functional component definition
function App() {
  return (
    // Main container for the entire application
    <div className="App">
      {/* Header section of the application */}
      <header className="App-header">
        {/* Logo image */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Text message encouraging code editing */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Link to the official React documentation */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Exporting the component to be used in other parts of the application
export default App;
