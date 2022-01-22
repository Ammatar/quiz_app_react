import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
import Result from './components/Pages/Result/Result';

function App() {
  const [userName, setUserName] = useState('');
  const [questions, setQuestions] = useState('');
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    if (data === '') {
      fetchQuestions(category, difficulty);
    } else {
      setQuestions(data.results);
    }
  };
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route
            path='/quiz/quiz'
            element={
              <Quiz
                questions={questions}
                userName={userName}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path='/quiz/result'
            element={<Result userName={userName} score={score} />}
          />
          <Route
            path='/quiz'
            element={
              <Home
                userName={userName}
                setUserName={setUserName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
