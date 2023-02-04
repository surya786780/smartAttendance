import React, { useState } from "react";
import "./Dashboard.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import StudentData from "../StudentData/StudentData";
import CalendarComp from "../Calendar/Calendar";
import MainComp from "../MainComp/MainComp";
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [comp, setComp] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="dashboard">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-center">KSRCE</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
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
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          {
            comp == 1 ? (
              <>
                <StudentData />
              </>
            ) : comp == 2 ? (
              <>
                <CalendarComp />
              </>
            ) : comp == 3 ? (
              <>
                <MainComp />
              </>
            ) : comp == 4 ? (
              <>4</>
            ) : comp == 5 ? (
              <>5</>
            ) : (
              <>null</>
            )

            // () => {
            //   switch (comp) {
            //     case 1:
            //       return <StudentData />;
            //     case 2:
            //       return <>2</>;
            //     case 3:
            //       return <>3</>;
            //     case 4:
            //       return <>4</>;
            //     case 5:
            //       return <>5</>;
            //     default:
            //       return <>null</>;
            //   }
            // }
          }
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
