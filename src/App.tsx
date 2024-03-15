import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from "./components/QuestionCard";
import { Difficulty } from './API';


const TOTAL_QUESTION = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  // const { userAnswer, setUserAnswer } = useState([]);
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY))

  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  return (
    <div className='App'>
      <h1>React Quiz </h1>
      <button className='start' onCanPlay={startTrivia}>
        Start
      </button>
      <p className='score'>Score : </p>
      <p>Loading Question ....</p>
      {/* <QuestionCard
        questionNumb={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onCanPlay={nextQuestion}>Next</button>
    </div>
  )
}

export default App
