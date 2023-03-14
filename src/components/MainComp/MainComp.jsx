import { Layout, Menu, theme } from "antd";
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "./MainComp.css";
import { AllData } from "../../pages/Router";
const { Header, Sider } = Layout;

const App = () => {
  const [data, setData] = useContext(AllData);
  setData("This is Main comp");
  // get last end point url
  const search = useLocation();
  const endPoint = search.pathname;
  // get last end point url

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
          className="logo text-center"
        >
          KSRCE
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[endPoint]}
          items={[
            {
              key: "/home-page",
              icon: (
                <Link to="/home-page" className="link">
                  <span className="material-symbols-outlined">home</span>
                </Link>
              ),
              label: (
                <Link to="/home-page" className="link">
                  <div>Home</div>
                </Link>
              ),
            },
            {
              key: "/dashboard",
              icon: (
                <Link to="/dashboard" className="link">
                  <div>
                    <span className="material-symbols-outlined ">
                      dashboard
                    </span>
                  </div>
                </Link>
              ),
              label: (
                <Link to="/dashboard" className="link">
                  <div>Dashboard</div>
                </Link>
              ),
            },
            {
              key: "/daily-data",
              icon: (
                <Link to="/daily-data" className="link">
                  <div>
                    <span className="material-symbols-outlined">
                      description
                    </span>
                  </div>
                </Link>
              ),
              label: (
                <Link to="/daily-data" className="link">
                  <div>Daily Data</div>
                </Link>
              ),
            },
            {
              key: "/student-data",
              icon: (
                <Link to="/student-data" className="link">
                  <div>
                    <span className="material-symbols-outlined ">article</span>
                  </div>
                </Link>
              ),
              label: (
                <Link to="/student-data" className="link">
                  <div>Student's data</div>
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "",
            borderBottom: "1px solid gray",
          }}
        >
          <h3
            className=" d-flex  align-items-center justify-content-center text-light"
            style={{ height: "100%" }}
          >
            Smart Attendance
          </h3>
        </Header>

        {/* <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;
