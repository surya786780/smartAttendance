import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import Dashboard from "../components/Dashboard/Dashboard";
import StudentTable from "../components/StudentTable/StudentTable";
import MainComp from "../components/MainComp/MainComp";
import DailyData from "../components/DailyData/DailyData";
import HomeComp from "../components/HomeComp/HomeComp";

export const AllData = createContext();

function Router() {
  const [data, setData] = useState({});
  return (
    <AllData.Provider value={[data, setData]}>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/home-page" element={<HomeComp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/daily-data" element={<DailyData />}></Route>
        <Route path="/student-data" element={<StudentTable />}></Route>
      </Routes>
    </AllData.Provider>
  );
}

export default Router;
