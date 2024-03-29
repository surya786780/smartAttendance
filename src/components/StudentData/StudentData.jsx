import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentData.css";
function StudentData() {

  const [todayAttendance, setTodayAttendance] = useState([]);
  // set present data
  let presentCount = 0;
  let absentCount = 0;
  const [p,setP] = useState(0);
  const [a,setA] = useState(0);

  // set present data
  //api request
  const getData = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER_KEY}/dailyAttendance`;
      const userData = await axios.get(url);
      setTodayAttendance(userData.data);
      // console.log(userData.data);
    } catch (e) {
      console.error(e);
    }
  };
  
  useEffect(() => {
    getData();
    pandA();
  }, [todayAttendance]);
  
  function pandA(){
     todayAttendance.map((e)=>{
    if(e.attendance) presentCount +=1;
    else absentCount += 1;
  }
  )
  setP(presentCount); 
  setA(absentCount);
  }
 
  //api request

  return (
    <div className="">
      <div className="row details">
        <div className="col ">
          <p>Total Student</p>
          <p>{todayAttendance.length}</p>
        </div>
        <div className="col present">
          <p>Today Present</p>
          <p>{p?p:0}</p>
        </div>
        <div className="col absent">
          <p>Total Absent</p>
          <p>{a?a:0}</p>
        </div>
      </div>

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
            {todayAttendance.map((e) => {
              return (
                <tr key={e.RegisterNumber}>
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

export default StudentData;
