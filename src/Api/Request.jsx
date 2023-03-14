import React from "react";
import axios from "axios";

function Request(method, url, data) {
  switch (method) {
    case "get":
      axios
        .get(url, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => ({ type: "success", data: res }))
        .catch((err) => ({ type: "error", data: err }));
      break;
    case "post":
      axios
        .post(url, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => ({ type: "success", data: res }))
        .catch((err) => ({ type: "error", data: err }));
      break;
    case "put":
      axios
        .put(url, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => ({ type: "success", data: res }))
        .catch((err) => ({ type: "error", data: err }));
    default:
      console.log("Invalid Method Name");
  }
}

export default Request;
