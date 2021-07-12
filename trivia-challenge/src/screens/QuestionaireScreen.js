import React, { useState } from "react";

import { useGetQuestionsByParamsQuery } from "../store/getQuestionsApi";
import { ResultScreen, Questionaire } from "./index";

export const QuestionaireScreen = ({ difficultyValue, amountValue }) => {
  const [questionsData, setQuestionsData] = useState([]);
  const [resultQuestionsData, setResultQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { data, error, isLoading } = useGetQuestionsByParamsQuery({
    difficultyValue,
    amountValue,
  });

  const handleAnswerOnQuestion = (currentIndex, answerStatus) => {
    setCurrentQuestionIndex(++currentIndex);
    const isCorrectAnswer =
      questionsData[--currentIndex].correct_answer === answerStatus.toString();
    setResultQuestionsData(questionsData);

    let currentIndexQuestion = { ...resultQuestionsData[currentIndex] };
    currentIndexQuestion.isCorrectAnswer = isCorrectAnswer;
    const questionsDataWithQuestionWithAnswerStatus = [...resultQuestionsData];
    questionsDataWithQuestionWithAnswerStatus[
      currentIndex
    ] = currentIndexQuestion;
    setResultQuestionsData(questionsDataWithQuestionWithAnswerStatus);
  };

  if (data?.results?.length && !questionsData?.length) {
    setQuestionsData(data?.results);
    setResultQuestionsData(data?.results);
  }

  return (
    <div>
      {isLoading && <div>...Loading</div>}
      {questionsData?.length === currentQuestionIndex &&
        questionsData?.length && <ResultScreen results={resultQuestionsData} />}
      {questionsData?.length &&
        questionsData?.length !== currentQuestionIndex && (
          <Questionaire
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={handleAnswerOnQuestion}
            data={questionsData[currentQuestionIndex]}
          />
        )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};
