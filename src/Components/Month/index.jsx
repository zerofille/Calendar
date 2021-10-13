import { addDays } from "date-fns";
import Week from "../Week";

export default function Month(props) {

  return (
    <div style={{ backgroundColor: "wheat" }}>
      <Week useProps={[props.currentDay, props.setCurrentDay]} startingDay={addDays(props.currentDay, -14)} />
      <Week useProps={[props.currentDay, props.setCurrentDay]}  startingDay={addDays(props.currentDay, -7)} />
      <Week useProps={[props.currentDay, props.setCurrentDay]}  startingDay={props.currentDay} />
      <Week useProps={[props.currentDay, props.setCurrentDay]}  startingDay={addDays(props.currentDay, 7)} />
      <Week useProps={[props.currentDay, props.setCurrentDay]} startingDay={addDays(props.currentDay, 14)} />
    </div>
  );
}

