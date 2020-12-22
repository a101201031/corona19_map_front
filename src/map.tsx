import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState, useCallback } from 'react';
import getLocation from 'javascript/getLocation';
import { ENV } from 'constants/ENV';

function MapComponent() {
  const [center, setCenter] = useState({ lat: 37, lng: 126 });

  const onLoad = useCallback(async (map: google.maps.Map<Element>) => {
    const location = await getLocation();
    setCenter(location);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={ENV.GOOGLE_API_KEY}
      mapIds={[ENV.GOOGLE_MAP_ID]}
    >
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: '100%', height: '94vh' }}
        center={center}
        zoom={5}
        onLoad={onLoad}
        options={{ mapId: ENV.GOOGLE_MAP_ID } as google.maps.MapOptions}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {/* <></> */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);
