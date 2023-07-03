import { Button } from "@material-ui/core";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Question.module.css";
const Question = ({
  questions,
  score,
  options,
  setScore,
  currQuestion,
  setCurrQuestion,
  correctAns,
}) => {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const checkAnswerHandler = (option) => {
    if (option === selected && selected === correctAns) {
      return "correct";
    } else if (option === selected && selected !== correctAns) {
      return "wrong";
    } else if (option === correctAns) {
      return "correct";
    }
  };
  const checkHandler = (option) => {
    if (option === correctAns) {
      setScore(score + 1);
    }
    setSelected(option);
    setTimeout(() => {
      if (currQuestion > 8) {
        navigate("/result");
      }
      setCurrQuestion(currQuestion + 1);
      setSelected();
    }, 1000);
  };
  return (
    <div className={Style["question"]}>
      <div className={Style["question__que"]}>
        <p>{questions && questions[currQuestion]?.question}</p>
      </div>
      <div className={Style["question__option"]}>
        {options &&
          options.map((option) => (
            <button
              key={option}
              onClick={() => checkHandler(option)}
              className={Style[`${selected && checkAnswerHandler(option)}`]}
              disabled={selected}
            >
              {option}
            </button>
          ))}
      </div>
      <div className={Style["question__action"]}>
        <Button
          variant="contained"
          color="secondary"
          style={{ width: "200px" }}
          size="large"
          onClick={() => navigate("/result")}
        >
          Quit
        </Button>
      </div>
    </div>
  );
};

export default Question;
