import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // Import mapboxgl
import './MapComponent.css'; // Import MapComponent-specific styles

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 12,
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [viewport.longitude, viewport.latitude],
      zoom: viewport.zoom,
      accessToken: 'YOUR_MAPBOX_API_KEY',
    });

    map.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [viewport]);

  return (
    <div id="map-container" className="map-container">
      {mapLoaded && (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="YOUR_MAPBOX_API_KEY"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(viewport) => setViewport(viewport)}
        />
      )}
    </div>
  );
};

export default MapComponent;