import SelectedDay from "../SelectedDay";
import CalendarBody from "../CalendarBody";
import { useState } from "react";
import DayContext from "../../Context";
import styles from './style.module.scss'
export default function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <DayContext.Provider value={[currentDay, setCurrentDay]}>
      <div className={styles.mainWrapper}>
      <SelectedDay/>
      <CalendarBody/>
      </div>
    </DayContext.Provider>
  );
}
