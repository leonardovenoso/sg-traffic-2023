const getDistanceInMeters = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const getLocationNameByLatLong = (locationLat, locationLong, forecasts) => (
  forecasts.map(weatherLocation => ({
    distanceInMeters: getDistanceInMeters(weatherLocation.label_location.latitude, weatherLocation.label_location.longitude, locationLat, locationLong),
    locationName: weatherLocation.name,
  }))
  .sort((a, b) => a.distanceInMeters - b.distanceInMeters)[0].locationName
);