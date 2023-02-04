import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";

import StudentData from "../StudentData/StudentData";
import CalendarComp from "../Calendar/Calendar";
import Table from "../Table/Table";
import "./MainComp.css";
import HomeComp from "../HomeComp/HomeComp";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [comp, setComp] = useState(0);
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
          defaultSelectedKeys={["4"]}
          items={[
            {
              key: "1",
              icon: (
                <div
                  onClick={() => {
                    setComp(1);
                    console.log("working");
                  }}
                >
                  <span className="material-symbols-outlined me-4">
                    dashboard
                  </span>
                </div>
              ),
              label: (
                <div
                  onClick={() => {
                    setComp(1);
                    console.log("working");
                  }}
                >
                  Dashboard
                </div>
              ),
            },
            {
              key: "2",
              icon: (
                <div
                  onClick={() => {
                    setComp(2);
                  }}
                >
                  <span className="material-symbols-outlined me-4">mail</span>
                </div>
              ),
              label: (
                <div
                  onClick={() => {
                    setComp(2);
                  }}
                >
                  Messages
                </div>
              ),
            },
            {
              key: "3",
              icon: (
                <div
                  onClick={() => {
                    setComp(3);
                  }}
                >
                  <span className="material-symbols-outlined me-4">
                    article
                  </span>
                </div>
              ),
              label: (
                <div
                  onClick={() => {
                    setComp(3);
                  }}
                >
                  Courses
                </div>
              ),
            },
            {
              key: "4",
              icon: (
                <div
                  onClick={() => {
                    setComp(4);
                  }}
                >
                  <span className="material-symbols-outlined me-4">sort</span>
                </div>
              ),
              label: (
                <div
                  onClick={() => {
                    setComp(4);
                  }}
                >
                  Classes
                </div>
              ),
            },
            {
              key: "5",
              icon: (
                <div
                  onClick={() => {
                    setComp(5);
                    console.log("working");
                  }}
                >
                  <span className="material-symbols-outlined me-4">
                    article
                  </span>
                </div>
              ),
              label: (
                <div
                  onClick={() => {
                    setComp(5);
                  }}
                >
                  Course 1
                </div>
              ),
            },
            {
              key: "6",
              icon: (
                <>
                  <span className="material-symbols-outlined me-4">
                    article
                  </span>
                </>
              ),
              label: "Course 2",
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
            background: colorBgContainer,
          }}
        >
          <h3
            className=" d-flex  align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            Smart Attendance
          </h3>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {comp == 0 ? (
            <>
              <HomeComp />
            </>
          ) : comp == 1 ? (
            <>
              <StudentData />
            </>
          ) : comp == 2 ? (
            <>
              <CalendarComp />
            </>
          ) : comp == 3 ? (
            <>
              <Table />
            </>
          ) : comp == 4 ? (
            <>4</>
          ) : comp == 5 ? (
            <>5</>
          ) : (
            <>null</>
          )}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default App;
