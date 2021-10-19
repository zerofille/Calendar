import SelectedDay from "../SelectedDay";
import CalendarBody from "../CalendarBody";
import { useState } from "react";
import DayContext from "../../Context";
export default function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <DayContext.Provider value={[currentDay, setCurrentDay]}>
      <SelectedDay/>
      <CalendarBody/>
    </DayContext.Provider>
  );
}
