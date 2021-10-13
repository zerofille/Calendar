import SelectedDay from "../SelectedDay";
import CalendarBody from "../CalendarBody";
import { useState } from "react";
export default function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <div>
      <SelectedDay currentDay={currentDay} />
      <CalendarBody currentDay={currentDay} setCurrentDay={setCurrentDay} />
    </div>
  );
}
