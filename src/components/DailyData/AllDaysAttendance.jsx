import React, { useState, useEffect } from "react";
import axios from "axios";

// css
import "../StudentData/StudentData.css"

function AllDaysAttendance({showData}) {
  console.log(showData);
  const [todayAttendance, setTodayAttendance] = useState([]);
  //api request
  const getData = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER_KEY}/allDaysAttendance/${showData}`;
      const userData = await axios.get(url);
      setTodayAttendance(userData.data.details);
      console.log(userData.data);
    } catch (e) {
      setTodayAttendance([]);
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, [showData]);

  //api request
  console.log(todayAttendance);

  if(todayAttendance.length === 0){
    return(<h1 className="noDataDiv">Data not found</h1>);
  }

  return (
    <div className="">
      <div className="table-daily-attendance mt-5">
        <table className="table">
          <thead className="thead-dark bg-dark text-light">
            <tr>
              <th scope="col">S.NO</th>
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
                  <td>{e.RegisterNumber}</td>
                  <td>{e.name}</td>
                  <td>{e.phoneNumber}</td>
                  {
                    e.attendance ? <td className="present">Present</td> : <td className="absent">Absent</td>

                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllDaysAttendance;
