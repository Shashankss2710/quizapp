import React from "react";
import Style from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return <p className={Style["error"]}>Please fill all input fields</p>;
};

export default ErrorMessage;
