import React, { useContext } from "react";
import { addDays } from "date-fns";
import Week from "../Week";
import DayContext from "../../Context";

export default function Month() {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <Week startingDay={addDays(currentDay, -14)} />
      <Week startingDay={addDays(currentDay, 7)} />
      <Week startingDay={currentDay} />
      <Week startingDay={addDays(currentDay, 7)} />
      <Week startingDay={addDays(currentDay, 14)} />
      <Week startingDay={addDays(currentDay, 21)} />
    </div>
  );
}
