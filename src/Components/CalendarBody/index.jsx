import { format, addDays, startOfWeek } from "date-fns";
import React, { useContext } from "react";
import Month from "../Month";
import DayContext from "../../Context";
import styles from "./style.module.scss";

export default function CalendarBody(props) {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  return (
    <div className={styles.calendarBody}>
      <h1 className={styles.monthName}>{format(currentDay, "LLLL yyyy")}</h1>
      <DaysOfWeek />
      <Month />
    </div>
  );
}
function DaysOfWeek() {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return <div>{format(addDays(startingDate, i), "EEEEE")}</div>;
  });
  return <div className={styles.daysInitials}>{daysArr}</div>;
}
