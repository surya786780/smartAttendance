import React, { useContext } from "react";
import MainComp from "../MainComp/MainComp";
import { AllData } from "../../pages/Router";
function HomeComp() {
  const [data, setData] = useContext(AllData);
  console.log(data, "in home comp");
  return (
    <>
      <MainComp />
      <div className="home-comp mt-5">
        <img src="https://ksrce.ac.in/assets/img/ksrce.jpg" alt="" />
      </div>
    </>
  );
}

export default HomeComp;
