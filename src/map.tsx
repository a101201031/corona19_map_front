import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState, useCallback } from 'react';
import getLocation from 'javascript/getLocation';
import 'map.css';

function MyComponent() {
  const [center, setCenter] = useState({ lat: 37, lng: 126 });

  const onLoad = useCallback(async (map) => {
    const location = await getLocation();
    console.log(location);
    setCenter(location);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap id="map" center={center} zoom={5} onLoad={onLoad}>
        {/* Child components, such as markers, info windows, etc. */}
        {/* <></> */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
