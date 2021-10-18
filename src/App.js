import Calendar from "./Components/Calendar";
import "./App.css";

import DayContext from "./Context";

function App() {
  return (
    <DayContext.Provider value={[currentDay, setCurrentDay ]}>
    <div className="App">
      <Calendar />
    </div>
    </DayContext.Provider>
  );
}

export default App;
