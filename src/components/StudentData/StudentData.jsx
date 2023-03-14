import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentData.css";
function StudentData() {
  const [todayAttendance, setTodayAttendance] = useState([]);
  //api request
  const getData = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const userData = await axios.get(url);
      setTodayAttendance(userData.data);
      console.log(userData.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //api request

  return (
    <div className="">
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

      <div className="table-daily-attendance mt-5">
        <table className="table">
          <thead className="thead-dark bg-dark text-light">
            <tr>
              <th scope="col">Register Number</th>
              <th scope="col">Student Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Present / Absent</th>
            </tr>
          </thead>
          <tbody>
            {todayAttendance.map((e, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{e.id}</th>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentData;
