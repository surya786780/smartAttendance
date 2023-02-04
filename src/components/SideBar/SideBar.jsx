import React, { useState } from "react";
import "./SideBar.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
function SideBar() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout className="sideBar">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo topTitle text-center m-5">LearnIt</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <>
                    <span class="material-symbols-outlined ">dashboard</span>
                  </>
                ),
                label: "Dashboard",
              },
              {
                key: "2",
                icon: (
                  <>
                    <span class="material-symbols-outlined ">mail</span>
                  </>
                ),
                label: "Messages",
              },
              {
                key: "3",
                icon: (
                  <>
                    <span class="material-symbols-outlined ">article</span>
                  </>
                ),
                label: "Courses",
              },
              {
                key: "4",
                icon: (
                  <>
                    <span class="material-symbols-outlined ">sort</span>
                  </>
                ),
                label: "Classes",
              },
              {
                key: "5",
                icon: (
                  <>
                    <span class="material-symbols-outlined ">article</span>
                  </>
                ),
                label: "Course 1",
              },
              {
                key: "6",
                icon: (
                  <>
                    <span class="material-symbols-outlined ">article</span>
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
            className="headerBar"
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          {/* <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default SideBar;
