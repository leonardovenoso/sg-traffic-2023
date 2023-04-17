import { useSelector } from 'react-redux';
import Spinner from './spinner';
import { getLocationNameByLatLong } from '@/utils/haversine';
import styles from '@/styles/locations.module.css';

const LocationTitle = ({ lat, lon, weatherLocations }) => {
  const locationName = getLocationNameByLatLong(lat, lon, weatherLocations.area_metadata);
  return (
    <div className={styles.title}>
      {locationName} - {weatherLocations.items[0].forecasts.find(forecast => forecast.area === locationName).forecast}
    </div>
  );
};

const Locations = () => {
  const { locations, isLocationLoading } = useSelector(state => state.traffic);
  const { weatherLocations, isWeatherLoading } = useSelector(state => state.weather);

  return (
    <>
      {locations?.items && locations.items[0].cameras.length > 0 && weatherLocations.area_metadata?.length > 0 &&
        <div>
          <h1>Locations</h1>
          {locations.items[0].cameras.map((location, i) => (
            <div className={styles.locationCard} key={i}>
              <LocationTitle lat={location.location.latitude} lon={location.location.longitude} weatherLocations={weatherLocations} />
              <div className={styles.body}>
                <p>Camara id: {location.camera_id}</p>
                <p>Latitud and Longitude: ({location.location.latitude}, {location.location.longitude})</p>
                <img src={location.image} alt='' className={styles.image} />
              </div>
            </div>
          ))}
        </div>
      }
      <Spinner show={isLocationLoading || isWeatherLoading} />
    </>
  );
};

export default Locations;