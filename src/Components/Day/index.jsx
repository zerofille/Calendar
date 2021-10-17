import { format, addDays } from "date-fns";
function Day({startingDate, setCurrentDay,i}) {
  
  return (
    <div style={{ margin: "20px" }}>
      {format(addDays(startingDate,i), "d")}
    </div>
  );
}
export default Day;
