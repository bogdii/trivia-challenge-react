import React from "react";

const Button = ({ answer, className }) => (
  <button
    className={`p-4 rounded-lg w-48 border-2 border-blue-800 uppercase hover:text-white hover:bg-blue-800 ${className}`}
  >
    {answer}
  </button>
);

export const Questionaire = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  showAnswers,
  handleNextQuestion,
  data: { question, category, difficulty, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswer = [correct_answer, incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div className="questionaire">
      <h1 >{category}</h1>
      <p>Level: {difficulty}</p>
      <div>
        <h2
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="buttons">
        {shuffledAnswer.map((answer, index) => {
          return (
            <button
              key={`${answer}-${index}`}
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex, answer);
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};
