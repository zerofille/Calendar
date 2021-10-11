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
  function takeWeek(start = new Date()) {
    let date = startOfWeek(start);
    return () => {
      const week = new Array(7)
        .fill(null)
        .map((_, i) => <div>{format(addDays(date, i), "d")}</div>);
      // date = addDays(week[6], 1);
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
      const endDate = endOfWeek(endOfMonth(date));
      month.push(weekGen());
      while (lastDayOfRange(month) < endDate) {
        month.push(weekGen());
      }

      const range = month;
      month = [];
      date = addDays(lastDayOfRange(month), 1);

      return range;
    };
  }

  console.log();

  return <div>{takeWeek(new Date())()}</div>;
}
