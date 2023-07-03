import { CircularProgress } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Style from "./Quiz.module.css";

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(Number(0));
  const [correctAns, setCorrectAns] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const allOptions = questions && [
      questions[currQuestion]?.correct_answer,
      ...questions[currQuestion]?.incorrect_answers,
    ];
    setOptions(questions && allOptions.sort(() => Math.random() - 0.5));
    setCorrectAns(questions && questions[currQuestion]?.correct_answer);
  }, [questions, currQuestion]);
  
  useEffect(() => {
    setQuestions();
    if (!name) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      {questions ? (
        <div className={Style["quiz"]}>
          <h2
            className={Style["quiz-user__name"]}
            style={{ marginTop: "20px" }}
          >
            Welcome {name}
          </h2>
          <div className={Style["quiz__details"]} style={{ marginTop: "20px" }}>
            <span>{questions[currQuestion]?.category}</span>
            <span>Current Score : {score}</span>
          </div>
          <h2 style={{ marginTop: "20px" }}>Question : {currQuestion + 1}</h2>
          <Question
            questions={questions}
            score={score}
            options={options}
            setScore={setScore}
            currQuestion={currQuestion}
            setCurrQuestion={setCurrQuestion}
            correctAns={correctAns}
          />
        </div>
      ) : (
        <CircularProgress
          style={{ margin: "15% 47%" }}
          color="inherit"
          size={50}
          thickness={3}
          className={Style["progress"]}
        />
      )}
    </>
  );
};

export default Quiz;
