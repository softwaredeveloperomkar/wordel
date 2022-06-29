import { useContext } from "react";
import React from 'react'
import { AppContext } from "../App";

function Letter({col,row}) {
    const {board, corrWord, currPos, keyState } = useContext(AppContext);
    const letter = board[row][col];

    const correct = corrWord[col]===letter;
    const almost= !correct && letter!=="" && corrWord.includes(letter);
    const state = currPos.attempt <= row ? "" : correct ? "correct" : almost ? "almost" : "error";
    if(currPos.attempt>row)
     keyState[letter]=state;

  return (
    <div className='letter' id={state}>
      {letter}
    </div>
  )
}

export default Letter;
