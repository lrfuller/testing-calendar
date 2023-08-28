import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [dateVal, setDateVal] = useState(new Date());
  const [parseDate, setParseDate] = useState(dateVal);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setParseDate(
      dateVal.getDay() + " " + dateVal.getDate() + " " + dateVal.getFullYear()
    );
  }, [dateVal]);

  const showDate = () => {
    // setShowDatePicker(() => (prevState) => !prevState);
    setShowDatePicker(!showDatePicker);
  };

  const dateChange = (e) => {
    setDateVal(e);
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: "absolute", top: "50px" }}>
          testing react calendar
          <div>
            <input type="text" value={parseDate} disabled />
            <input type="button" onClick={showDate} value="date" />
          </div>
        </div>
        {showDatePicker === false ? (
          <Calendar onChange={dateChange} value={dateVal} />
        ) : null}
      </header>
    </div>
  );
}

export default App;
