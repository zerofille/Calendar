import { format, addDays, startOfWeek } from "date-fns";
import React from "react";
import Month from "../Month";

export default function CalendarBody(props) {
  return (
    <div>
      <h1>{format(props.currentDay, "LLLL yyyy")}</h1>
      <DaysOfWeek currentDay={props.currentDay} />
      <Month {...props} />
    </div>
  );
}
function DaysOfWeek({ currentDay }) {
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return (
      <div style={{ margin: "24px" }}>
        {format(addDays(startingDate, i), "EEEEE")}
      </div>
    );
  });
  return <div style={{ display: "flex" }}>{daysArr}</div>;
}
