import React from "react";
import { useDispatch } from "react-redux";

import { setIsStartScreenToShow } from "../store/questionaireSlice";

export const ResultScreen = ({ results }) => {
  const dispatch = useDispatch();
  console.log("results", results);
  return (
    <div className="results">
      <h1>Your result</h1>
      {results?.length &&
        results.map((resultItem, index) => (
          <div className="answer" key={`${resultItem.question}-${index}`}>
           <p
           dangerouslySetInnerHTML={{ __html: resultItem.question }}
           /> <p>{resultItem.isCorrectAnswer.toString()}</p>
          </div>
        ))}
      <button
        type="submit"
        onClick={() => {
          dispatch(setIsStartScreenToShow(true));
        }}
      >
        Play Again
      </button>
    </div>
  );
};
