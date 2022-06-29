import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from './components/words'
import { createContext, useState, useEffect } from 'react';
import Gameover from './components/Gameover';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault); // board where we store words from user
  const [currPos, setCurrPos] =useState({attempt: 0, position: 0}); // state to store current position
  const [wordSet, setWordSet] = useState(new Set()); // we define a set to easily find word from bank
  const [gameover, setGameover] = useState({gameover : false, correct : false}); // gameover state
  const [corrWord, setCorrectWord] =useState(""); // to set random word
  
  const keyState={}; // keyboard state

  // runs in start of program to get a random word
  // dont know why but it is running 2 times
  useEffect(() => { 
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      console.log(words.todaysWord);
    });
  }, []);

  // on Selecting a letter
  const onSelect=(val)=>{
    if(currPos.position>4) { // more than 5 words
      return;
    }
    const currBoard = [...board];
    currBoard[currPos.attempt][currPos.position]=val;
    setCurrPos({...currPos, position: currPos.position+1}); // update position
    setBoard(currBoard); // update board
  } 
  // on deleting a letter
  const onDelete=()=>{
    if(currPos.position===0) return; // nothing to delete
    const newBoard = [...board];
    newBoard[currPos.attempt][currPos.position-1]="";
    setCurrPos({...currPos, position: currPos.position-1});
    setBoard(newBoard);
  }
  const onEnter=()=>{
    if(currPos.position===5){ //when word is complete
      let currWord="";
      for(let i=0;i<5;i++){
        currWord+=board[currPos.attempt][i];
      }
      currWord+="\r"; // adding /r because words in bank has it
      if(wordSet.has(currWord.toLowerCase())){
        setCurrPos({attempt: currPos.attempt+1, position: 0});
      }
      else {
        alert("not found"); // if word not found
      }
      if(currWord===corrWord){ // guessed correct word
        setGameover({gameover:true, correct:true});
      }
      else if(currPos.attempt===5){ // lost
        setGameover({gameover:true, correct:false});
      }
    }
  }
  return (
    <div className="App">
      <nav><h1>Wordel</h1></nav>
      <AppContext.Provider value={{ 
        board, 
        setBoard, 
        currPos, 
        setCurrPos, 
        onSelect, 
        onDelete, 
        onEnter, 
        keyState,
        gameover,
        setGameover, 
        corrWord}}>
      <Board/>
      {gameover.gameover ? <Gameover/> :<Keyboard/>}
      </AppContext.Provider>
    </div>
  );
}

export default App;
