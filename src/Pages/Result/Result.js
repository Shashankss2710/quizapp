import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Result.module.css";

const Result = ({ name, score, setScore }) => {
  const navigate = useNavigate();
  let message;
  if (score < 5) {
    message = "You need to work hard😃";
  } else if (score > 5 && score < 8) {
    message = "Nice try😉";
  } else {
    message = "Congratulation🎉 You were great";
  }
  const onClickHandler = () => {
    setScore(0);
    navigate("/");
  };
  useEffect(() => {
    if (!name) {
      setScore(0);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, navigate]);
  return (
    <div className={Style["result"]}>
      <div className={Style["result__message"]}>
        <h2>Hey, {name}</h2>
        <h3>{message}</h3>
        <p>You scored : {score}/10</p>
      </div>
      <Button
        variant="contained"
        color="secondary"
        style={{ width: "200px", margin: "30px" }}
        size="large"
        onClick={onClickHandler}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default Result;
