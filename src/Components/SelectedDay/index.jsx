import {
  format,
  addDays,
  startOfDay,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
} from "date-fns";
export default function SelectedDay({ day }) {
  return (
    <div>
      <p>{format(day, "EEEE")}</p>
      <h1>{format(day, "i")}</h1>
    </div>
  );
}
