import { format, addDays } from "date-fns";
export default function Day(props) {
    
  return (
    <div style={{ margin: "20px" }}>
      {format(addDays(props.startingDate, props.i), "d")}
    </div>
  );
}
