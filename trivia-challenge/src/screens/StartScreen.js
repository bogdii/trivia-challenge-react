import React, { useState } from "react";

import { QuestionaireScreen } from "./QuestionaireScreen";
import {
  setIsStartScreenToShow,
  selectIsStartScreenToShow,
} from "../store/questionaireSlice";
import { useSelector, useDispatch } from "react-redux";

const DIFFICULTY = ["easy", "medium", "hard"];

export const StartScreen = () => {
  const dispatch = useDispatch();
  const [amountValue, setAmountValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState(DIFFICULTY[0]);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const isStartScreenToShow = useSelector(selectIsStartScreenToShow);
  console.log("isStartScreenToShow", isStartScreenToShow);

  const handleAmountValueChange = (e) =>
    +e.target.value && setAmountValue(e.target.value);

  const handleChangeDropdownStatus = () => () =>
    setIsDropdownOpened(!isDropdownOpened);

  const handleChangeDifficultyValue = (item) => () => {
    setDifficultyValue(item);
    setIsDropdownOpened(!isDropdownOpened);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    amountValue && dispatch(setIsStartScreenToShow(false));
  };

  return (
    <div>
      {!isStartScreenToShow ? (
        <QuestionaireScreen
          amountValue={amountValue}
          difficultyValue={difficultyValue}
        />
      ) : (
        <div className="container">
          <div className="logo"></div>
          <label htmlFor="diff">Difficulty</label>
          <div name="diff" className="dropdown-input">
            <div onClick={handleChangeDropdownStatus()}>{difficultyValue}</div>
            {isDropdownOpened && (
              <div>
                {DIFFICULTY.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    onClick={handleChangeDifficultyValue(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="text"
            value={amountValue}
            placeholder="Type amount number"
            onChange={(e) => handleAmountValueChange(e)}
          />
          <button type="submit" onClick={(e) => handleSubmitForm(e)}>
            TRUE
          </button>
        </div>
      )}
    </div>
  );
};
