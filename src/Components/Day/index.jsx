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

  const stylesForDays = cx(styles.hiddenDays, {
    [styles.selected]: isSameDay(day, currentDay),
    [styles.notSelected]: isSameMonth(day, currentDay),
  });
  return (
    <div onClick={dayHandler} className={stylesForDays}>
      {format(day, "d")}
    </div>
  );
}
export default Day;
