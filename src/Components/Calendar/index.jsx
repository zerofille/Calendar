import {
  format,
  addDays,
  startOfDay,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
} from "date-fns";
import SelectedDay from "../SelectedDay";
import CalendarBody from "../CalendarBody";
export default function Calendar() {
  const date = new Date();
  return (
    <div>
      <SelectedDay day={date} />
      <CalendarBody selectedDay={date}/>
    </div>
  );
}
