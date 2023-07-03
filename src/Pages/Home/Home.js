import { Button, MenuItem, TextField } from "@material-ui/core";
import { React, useState } from "react";
import Style from "./Home.module.css";
import Categories from "../../Components/Data/Categories";
import ErrorMessage from "../../Components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions }) => {
  const [categories, setCategories] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const errorHandler = () => {
    if (!categories || !difficulty || !name) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(categories, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className={Style["home-page"]}>
      <div className={Style["home-page__details"]}>
        <div className={Style["home-page__settings"]}>
          <h2>Quiz Settings</h2>
        </div>
        {error && <ErrorMessage />}
        <TextField
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          style={{ marginTop: "20px" }}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          select
          label="Select Category"
          variant="outlined"
          style={{ marginTop: "20px" }}
          onChange={(e) => setCategories(e.target.value)}
          value={categories}
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select difficulty"
          variant="outlined"
          style={{ marginTop: "20px" }}
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        >
          <MenuItem key="easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="hard" value="hard">
            Hard
          </MenuItem>
        </TextField>
        <Button
          variant="contained"
          style={{ marginTop: "20px" }}
          onClick={errorHandler}
          color="primary"
        >
          Start Quiz
        </Button>
      </div>
      <div className={Style["home-page__img"]}>
        <img src="quiz.jpg" alt="quiz-page"/>
      </div>
    </div>
  );
};

export default Home;
