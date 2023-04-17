import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { locationsThunk } from '@/redux/slices/locationsSlice';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const Header = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment().subtract({ 'hours': 24 }).toDate());
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => { 
    const dateTime = moment(date).format('YYYY-MM-DDTHH:mm:00');
    if (moment(dateTime).isValid() && moment(dateTime).year() >= 2016) {
      dispatch(locationsThunk({ dateTime }));
    }
  }, [date, dispatch]);

  if (!showChild) return null;

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