import React, { useContext } from "react";
import { addDays, startOfMonth } from "date-fns";
import Week from "../Week";
import DayContext from "../../Context";
import { getWeeksInMonth } from "date-fns/esm";

export default function Month() {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const weekAmount = getWeeksInMonth(currentDay);
  const startMonth = startOfMonth(currentDay);
  return (
    <div style={{ backgroundColor: "wheat" }}>
      {new Array(Number([weekAmount])).fill(null).map((_, i) => {
        return <Week startingDay={addDays(startMonth, 7 * i)} />;
      })}
    </div>

    
  );
}
