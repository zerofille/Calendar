import {
  format,
  addDays,
  startOfDay,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
} from "date-fns";
export default function CalendarBody() {
  //   const selectedDate = new Date();
  //   const startDate = startOfWeek(startOfMonth(selectedDate));
  //   const endDate = endOfWeek(endOfMonth(selectedDate));
  function takeWeek(start = new Date()) {
    let date = startOfWeek(startOfDay(start));
    return () => {
      const week = [...Array(7)].map((_, i) => addDays(date, i));
      date = addDays(week[6], 1);
      return week;
    };
  }
  function takeMonth(start = new Date()) {
    let month = [];
    let date = startOfWeek(startOfDay(start));

    function lastDayOfRange(range) {
      return range[range.length - 1][6];
    }

    return () => {
      const weekGen = takeWeek(startOfMonth(date));
      const endDate = startOfDay(endOfWeek(endOfMonth(date)));
      month.push(weekGen());
      while (lastDayOfRange(month) < endDate) {
        month.push(weekGen());
      }

      const range = month;
      month = [];
      date = addDays(lastDayOfRange(month), 1);

      return ;
    };
  }

  return null;
}
