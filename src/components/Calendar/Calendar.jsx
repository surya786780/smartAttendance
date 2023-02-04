import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CalendarComp() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <h1 className="text-center">Calendar</h1>
      <div className="calendar-container d-flex justify-content-center">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="mt-4 fs-5 text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarComp;
