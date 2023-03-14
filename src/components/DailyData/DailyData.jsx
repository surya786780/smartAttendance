import React, { useContext } from "react";
import { useState } from "react";

import MainComp from "../MainComp/MainComp";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

import { AllData } from "../../pages/Router";
function CalendarComp() {
  const [data, setData] = useContext(AllData);
  const [date, setDate] = useState(new Date());
  console.log(data, " this is daily data");
  return (
    <div>
      <MainComp />
      <div className="inner-comp">
        <h1 className="text-center mt-3">Calendar</h1>
        <div className="calendar-container d-flex justify-content-center">
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className="mt-4 fs-5 text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default CalendarComp;
