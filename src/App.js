import React, { useState, createContext } from 'react';
import './App.css';
import Question from './components/atoms/Question';
import Container from './components/atoms/Container';
import OptionsContainer from './components/molecules/OptionsContainer';

const GameContext = createContext();

function GameProvider({ children, questions, currentQuestion, setCurrentQuestion, score, setScore, showScore, setShowScore }) {


  const handleNextQuestion = async () => {
      setCurrentQuestion(currentQuestion++)
    
  }

  return (
    <GameContext.Provider value={{ handleNextQuestion }}>
      {children}
    </GameContext.Provider>

  )
}
export { GameContext, GameProvider };


const App = () => {

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  return (
    <GameProvider questions={questions} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} score={score} setScore={setScore} showScore={showScore} setShowScore={setShowScore} >
      <Container>
        <h1>Quiz App</h1>
        <div className='quiz-container'>

          <Question question={questions[currentQuestion].questionText} />
          <OptionsContainer options={questions[currentQuestion].answerOptions} />

        </div>
      </Container>
    </GameProvider>


  );
}
export default App;
