// Importing React and Component from React
import React, { Component } from 'react';

// ErrorBoundary component definition
class ErrorBoundary extends Component {
  // Constructor to initialize the state
  constructor(props) {
    // Call the constructor of the parent class (Component)
    super(props);
    
    // Initialize the state with hasError set to false
    this.state = { hasError: false };
  }

  // A lifecycle method to handle errors and update the state
  static getDerivedStateFromError(error) {
    // Update the state to indicate that an error has occurred
    return { hasError: true };
  }

  // A lifecycle method to perform side effects after an error is thrown
  componentDidCatch(error, errorInfo) {
    // Log the error and additional error information to the console
    console.error(error, errorInfo);
    
    // You can also log the error to an error reporting service here
    // Example: Send the error data to a third-party error tracking service
    // reportErrorToService(error, errorInfo);
  }

  // The render method of the ErrorBoundary component
  render() {
    // If an error has occurred, render an error message
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    // If no error has occurred, render the children components
    return this.props.children;
  }
}

// Exporting the ErrorBoundary component for use in other parts of the application
export default ErrorBoundary;
