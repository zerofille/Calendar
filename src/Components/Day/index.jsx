import React, { useContext } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import DayContext from "../../Context";
import styles from "./style.module.scss";

function Day({ day }) {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const dayHandler = () => {
    setCurrentDay(day);
  };

  return (
    <div onClick={dayHandler} className={styles.day}>
      {format(day, "d")}
    </div>
  );
}
export default Day;
