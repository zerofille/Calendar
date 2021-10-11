import {
    format,
    addDays,
    startOfDay,
    startOfMonth,
    startOfWeek,
    endOfMonth,
    endOfWeek,
  } from "date-fns";
 import Week from "../Week"; 
  export default function CalendarBody({date}){
      return(
          <div>
              <Week startingDay={date}/>
          </div>
      );
  }