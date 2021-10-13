import { startOfWeek } from "date-fns";
import Day from "../Day";

export default function Week(props) {
  const startingDate = startOfWeek(props.startingDay);
  const {currentDay}=props
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return(
    
    ?<Day style={{backgroundColor:'red'}} startingDate={startingDate} i={i} />
    :<Day startingDate={startingDate} i={i} />)
  });

  return <div style={{ display: "flex" }}>{daysArr}</div>;
}
