import React, { useState, useEffect } from 'react';
import Questionaire from './components/Questionaire';
const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean';

function App() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(()=>{
    fetch(API_URL)
      .then((res)=> res.json())
      .then((data) => {
        setQuestions(data.results);
        console.log(data)
      });
  },[]);

  
  return <div className="container text-center text-blue-800">
          <Questionaire data={questions[0]} />
        </div>;
}

export default App;
