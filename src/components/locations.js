import { useSelector } from 'react-redux';
import Spinner from './spinner';
import styles from '@/styles/locations.module.css';

const Locations = () => {
  const { locations, isLocationLoading } = useSelector(state => state.locations);

  return (
    <>
      {locations?.length > 0 &&
        <div data-test-id='locations'>
          <h1>Locations</h1>
          {locations.map((location, i) => (
            <div className={styles.locationCard} key={i}>
                <div className={styles.title}>
                  {location.locationName} - {location.weatherForecast}
                </div>
              <div className={styles.body}>
                <p>Camara id: {location.cameraId}</p>
                <p>Latitud and Longitude: ({location.lat}, {location.lon})</p>
                <img src={location.imageURL} alt='' className={styles.image} width={200} height={200} />
              </div>
            </div>
          ))}
        </div>
      }
      {!isLocationLoading && locations?.length === 0 && (
        <h5>No results found</h5>
      )}
      <Spinner show={isLocationLoading} />
    </>
  );
};

export default Locations;