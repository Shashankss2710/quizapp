import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (categories = "", difficulty = "") => {
    console.log(categories, difficulty);
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categories}&difficulty=${difficulty}&type=multiple`
      );
      console.log(data.results);
      setQuestions(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        ></Route>
        <Route
          path="/quiz"
          element={
            <Quiz
              name={name}
              score={score}
              setScore={setScore}
              questions={questions}
              setQuestions={setQuestions}
            />
          }
        ></Route>
        <Route
          path="/result"
          element={<Result name={name} score={score} setScore={setScore} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
