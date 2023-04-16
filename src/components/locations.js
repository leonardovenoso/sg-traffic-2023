import { useSelector } from 'react-redux';
import styles from '@/styles/locations.module.css';
import Spinner from './spinner';

const Locations = () => {
  const { locations, isLocationLoading } = useSelector(state => state.traffic);
  return (
    <>
      {locations?.items?.length > 0 &&
        <h1>Locations</h1>
      }
      {locations?.items?.length > 0 && locations?.items[0].cameras.map((location, i) => (
        <div className={styles.locationCard} key={i}>
          <div className={styles.title}>Location name</div>
          <Spinner show={isLocationLoading} />
          {!isLocationLoading && (
            <div className={styles.body}>
              <p>Weather condition:</p>
              <p>Camara id: {location.camera_id}</p>
              <p>Latitud and Longitude: ({location.location.latitude}, {location.location.longitude})</p>
              <img src={location.image} alt='' className={styles.image} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Locations;