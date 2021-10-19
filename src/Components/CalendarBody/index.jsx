import { format, addDays, startOfWeek } from "date-fns";
import React, { useContext } from "react";
import Month from "../Month";
import DayContext from "../../Context";

export default function CalendarBody(props) {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  return (
    <div>
      <h1>{format(currentDay, "LLLL yyyy")}</h1>
      <DaysOfWeek />
      <Month />
    </div>
  );
}
function DaysOfWeek() {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return (
      <div style={{ margin: "10px" }}>
        {format(addDays(startingDate, i), "EEEEE")}
      </div>
    );
  });
  return <div style={{ display: "flex" }}>{daysArr}</div>;
}
