import React, { useContext } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import DayContext from "../../Context";

function Day({ startingDate, i, startingDay }) {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const dayHandler = () => {
    setCurrentDay(startingDate);
  };

  return (
    <div onClick={dayHandler} style={{ margin: "20px" }}>
      {format(addDays(startingDate, i), "d")}
    </div>
  );
}
export default Day;
