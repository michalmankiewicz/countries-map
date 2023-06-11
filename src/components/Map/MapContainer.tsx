import React, { useMemo } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import './MapContainer.scss';
import { useAppSelector } from '../../types/redux';
import { Spinner } from '@phosphor-icons/react';

function MapContainer() {
  const { markerCoords } = useAppSelector((state) => state.search);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY ?? '',
  });

  const defaultCenter = {
    lat: 52.2297,
    lng: 21.0122,
  };

  return (
    <main className="map-container">
      {!isLoaded && (
        <div className="map-container__spinner">
          <Spinner className="spinner" />
        </div>
      )}
      {isLoaded && (
        <GoogleMap mapContainerClassName="map" center={markerCoords ?? defaultCenter} zoom={5}>
          {markerCoords && <MarkerF position={markerCoords} />}
        </GoogleMap>
      )}
    </main>
  );
}

export default MapContainer;
