interface LocationTypes {
  lat: number;
  lng: number;
}

function getLocation(): Promise<LocationTypes> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, reject);
    }
  });
}
export default getLocation;
