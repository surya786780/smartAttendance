import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
// import Dashboard from "../components/Dashboard/Dashboard";
import MainComp from "../components/MainComp/MainComp";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/dashboard" element={<MainComp />}></Route>
    </Routes>
  );
}

export default Router;
