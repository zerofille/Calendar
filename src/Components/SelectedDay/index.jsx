import {format} from "date-fns";
export default function SelectedDay({ currentDay }) {
  return (
    <div>
      <p>{format(currentDay, "eeee")}</p>
      <h1>{format(currentDay, "d")}</h1>
    </div>
  );
}
