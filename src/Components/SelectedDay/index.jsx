import React, { useContext } from "react";
import { format } from "date-fns";
import DayContext from "../../Context";
import styles from "./styles.module.scss";

export default function SelectedDay() {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  return (
    <div className={styles.selectedDay}>
      <p className={styles.nameOfDay}>{format(currentDay, "eeee")}</p>
      <h1 className={styles.currentDay}>{format(currentDay, "d")}</h1>
    </div>
  );
}
