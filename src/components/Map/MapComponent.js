// Importing necessary dependencies
import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl'; // Importing mapbox-gl library
import './MapComponent.css'; // Importing MapComponent-specific styles

// MapComponent definition
const MapComponent = () => {
  // State to track if the map has loaded
  const [mapLoaded, setMapLoaded] = useState(false);

  // State to manage the viewport settings
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 12,
  });

  // useEffect hook to initialize the map and handle cleanup
  useEffect(() => {
    // Setting the Mapbox access token
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    // Creating a new Mapbox map instance
    const map = new mapboxgl.Map({
      container: 'map-container', // HTML container element for the map
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [viewport.longitude, viewport.latitude], // Initial map center
      zoom: viewport.zoom, // Initial map zoom level
    });

    // Event listener for the 'load' event, indicating that the map has loaded
    map.on('load', () => {
      setMapLoaded(true); // Updating the state to indicate that the map has loaded
    });

    // Cleanup function to remove the map instance when the component is unmounted
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [viewport]); // Dependency array to re-run the effect when the viewport changes

  // JSX to render the map container
  return (
    <div id="map-container" className="map-container">
      {mapLoaded && (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(viewport) => setViewport(viewport)}
        />
      )}
    </div>
  );
};

// Exporting the MapComponent for use in other parts of the application
export default MapComponent;
