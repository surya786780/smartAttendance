import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";

import axios from "axios";

import { AllData } from "../../pages/Router";

import MainComp from "../MainComp/MainComp";
import "./StudentTable.css";

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const StudentTable = () => {
  const [userData, setUserData] = useState([]);

  const [data, setData] = useContext(AllData);
  console.log(data, " this is studentTable");
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      id: 1234,
      name: "Edward King 0",
      phone: "32",
      email: "edward@gmail.com",
      address: "London, Park Lane no. 0",
    },
    {
      key: "1",
      id: 1235,
      name: "Edward King 1",
      phone: "32",
      email: "edward@gmail.com",
      address: "London, Park Lane no. 1",
    },
  ]);

  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: "Register Number",
      dataIndex: "id",
      width: "10%",
      // editable: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
      // editable: true,
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      // editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      // editable: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      // editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a className="delete-btn bg-danger p-2 text-light">Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  //
  const handleAdd = () => {
    const newData = {
      key: count,
      id: "123456",
      name: `Edward King ${count}`,
      phone: "32",
      email: "edward@gmail.com",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  //
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  //
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  //

  //api request

  const getData = async () => {
    console.log("hitt");
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const userData = await axios.get(url);
      setDataSource(userData.data);
      console.log(userData.data);
      // const { status } = userData.data || {};
      // if (status === "SUCCESS") {
      //   console.log(userData);
      //   // localStorage.setItem("token", JSON.stringify(userData));
      // }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //api request

  return (
    <>
      <MainComp />
      <div className="inner-comp p-5">
        <Button
          onClick={handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </>
  );
};
export default StudentTable;
