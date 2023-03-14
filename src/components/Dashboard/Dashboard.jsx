import React, { useContext, useState } from "react";
import "./Dashboard.css";
import { Layout, Menu, theme } from "antd";
import StudentData from "../StudentData/StudentData";
import MainComp from "../MainComp/MainComp";
import { AllData } from "../../pages/Router";
const Dashboard = () => {
  const [data, setData] = useContext(AllData);
  console.log(data, " this is dashboard");
  return (
    <>
      <MainComp />
      <div className="inner-comp p-5">
        <StudentData />
      </div>
    </>
  );
};
export default Dashboard;
