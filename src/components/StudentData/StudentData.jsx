import React from "react";
import "./StudentData.css";
function StudentData() {
  return (
    <div className="studentData">
      <div className="row details">
        <div className="col">
          <p>Total Student</p>
          <p>100</p>
        </div>
        <div className="col">
          <p>Today Present</p>
          <p>88</p>
        </div>
        <div className="col">
          <p>Total Obsent</p>
          <p>12</p>
        </div>
      </div>
    </div>
  );
}

export default StudentData;
