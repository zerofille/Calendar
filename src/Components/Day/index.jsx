import React, { useContext } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import DayContext from "../../Context";

function Day({day}) {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const dayHandler = () => {
    setCurrentDay(day);
  };

  return (
    <div onClick={dayHandler} style={{ margin: "20px" }}>
      {format(day, "d")}
    </div>
  );
}
export default Day;
