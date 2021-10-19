import React, { useContext } from "react";
import { addDays, format, startOfWeek } from 'date-fns';
import Day from '../Day'
import DayContext from "../../Context";

function Week( props ) {
  const startingDate = startOfWeek(props.startingDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return (
      <Day startingDate={startingDate} startingDay={props.startingDay}  i={i}/>
    );
  });
  return <div style={{ display: 'flex' }}>{daysArr}</div>;
}

export default Week;