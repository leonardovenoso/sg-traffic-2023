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
  const [date, setDate] = useState(moment().subtract({ 'minutes': 10 }).toDate());
  const dispatch = useDispatch();
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    const dateTime = moment(date).format('YYYY-MM-DDTHH:mm:00');

    if (moment(dateTime).isValid() && moment(dateTime).year() >= 2016) {
      dispatch(trafficThunk({ dateTime }));
      dispatch(weatherThunk( { dateTime }));
    }
  }, [date, dispatch]);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <DateTimePicker
        onChange={setDate}
        minDate={new Date('2016-03-01')}
        value={date}
        disableClock={true}
        disableCalendar={true}
        format='y-MM-dd h:mm a'
      />
    );
  }
};

export default Header;