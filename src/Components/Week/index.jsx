import {
    format,
    addDays,
    startOfDay,
    startOfMonth,
    startOfWeek,
    endOfMonth,
    endOfWeek,
  } from "date-fns";


export default function Week(){
    function takeWeek(start=new Date()) {
        let date = startOfWeek(start);
        return () => {
          const week = new Array(7)
            .fill(null)
            .map((_, index) => <div>{format(addDays(date, index), "EEEEE")}
            </div>);
          // date = addDays(week[6], 1);
          return week;
        };
      }
}