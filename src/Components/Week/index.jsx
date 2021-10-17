import { addDays, format, startOfWeek } from 'date-fns';
import Day from '../Day'

function Week( props ) {
  const startingDate = startOfWeek(props.startingDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return (
      <Day startingDate={startingDate} setCurrentDay={props.setCurrentDay} i={i}/>
    );
  });
  return <div style={{ display: 'flex' }}>{daysArr}</div>;
}

export default Week;