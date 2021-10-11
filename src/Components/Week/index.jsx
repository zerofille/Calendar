import {
  format,
  addDays,
  startOfDay,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
} from "date-fns";

export default function Week({ startingDay }) {
  const startingDate = startOfWeek(startingDay);
  const daysArray = new Array(7)
    .fill(null)
    .map((_, i) => 
    <div> {format(addDays(startingDate, i), "EEEEE")}</div>);
  return <div>{daysArray}</div>;
}
