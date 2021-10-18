import { format, addDays, startOfWeek } from "date-fns";
function Day({ startingDate,setCurrentDay, i, currentDay, startingDay }) {
 
 const dayHandler = (сurrentDay)=>{
setCurrentDay(startingDate)
 }
 
  return (
  
    <div onClick={dayHandler} style={{ margin: "20px" }}>
      {format(addDays(startingDate, i), "d")}
    </div>
  );
}
export default Day;
