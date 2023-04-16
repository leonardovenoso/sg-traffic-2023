import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { trafficThunk } from '@/redux/slices/trafficSlice';
import { weatherThunk } from '@/redux/slices/weatherSlice';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const Header = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    const dateTime = moment(date).format('YYYY-MM-DDTHH:mm:00');
    dispatch(trafficThunk({ dateTime }));
    dispatch(weatherThunk( { dateTime }));
  }, [date]);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <DateTimePicker onChange={setDate} value={date} disableClock={true} disableCalendar={true} format='y-MM-dd h:mm a'/>
    );
  }
};

export default Header;