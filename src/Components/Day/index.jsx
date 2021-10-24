import React, { useContext } from "react";
import { format, isSameDay, isSameMonth } from "date-fns";
import DayContext from "../../Context";
import styles from "./style.module.scss";
import cx from "classnames";

function Day({ day }) {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const dayHandler = () => {
    setCurrentDay(day);
  };

  const selectedDay = {
    [styles.selected]: isSameDay(day, currentDay),
  };
  const hiddenDays = {
    [styles.hiddenDays]: isSameMonth(day, currentDay),
  };
  return (
    <div
      onClick={dayHandler}
      className={cx(styles.notSelected, selectedDay, hiddenDays)}
    >
      {format(day, "d")}
    </div>
  );
}
export default Day;
