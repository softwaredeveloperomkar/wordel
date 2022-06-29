import React, { useContext } from 'react'
import { AppContext } from '../App'

function Gameover() {
    const {gameover, corrWord, currPos} =useContext(AppContext);
  return (
    <div className='gameover'>
      <h2>{gameover.correct ? "Wonderful Job!!!" : "Don't Give Up..."}</h2>
      <h1>Correct word: {corrWord}</h1>
      {gameover.correct && (
        <h3>You Guessed in {currPos.attempt} attempt</h3>
      )}
    </div>
  )
}

export default Gameover
