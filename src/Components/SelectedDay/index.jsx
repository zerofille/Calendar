import React, { useContext } from "react";
import {format} from "date-fns";
import DayContext from "../../Context";

export default function SelectedDay() {
  const [currentDay, setCurrentDay]=useContext(DayContext)
  return (
    <div>
      <p>{format(currentDay, "eeee")}</p>
      <h1>{format(currentDay, "d")}</h1>
    </div>
  );
}
