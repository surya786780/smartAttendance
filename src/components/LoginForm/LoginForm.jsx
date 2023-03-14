import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { toast } from "react-toastify";

import img6 from "../../Assets/images/LandingPage/img6.svg";

import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const [loginPage, setLoginPage] = useState(1);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.username === "ksrce" && values.password === "123456") {
      navigate("/home-page", { replace: true });
    } else {
      toast.error("Error! Invalid username or password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("err");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginPage">
      <div className="form">
        <div className="imgs">
          <img className="img1" src={img6} alt="Img" />
        </div>
        <div className="forms align-items-center">
          {loginPage == 1 ? (
            <>
              <div className="welcome">
                <p className="wel">Welcome Back,</p>
                <p className="cont">Login to continue.</p>
              </div>

              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="username" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="password" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>

                <p
                  className="register text-center"
                  onClick={() => setLoginPage(2)}
                >
                  Not yet registered Sign Up
                </p>
              </Form>
            </>
          ) : loginPage == 2 ? (
            <>
              <div className="welcome">
                <p className="wel">Welcome to Smart Attendance,</p>
                <p className="cont">Signup to continue.</p>
              </div>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="username" />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Email ID!",
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="Email ID" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="password" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>

                <p
                  className="register text-center"
                  onClick={() => setLoginPage(1)}
                >
                  Login to Continue
                </p>
              </Form>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
