import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from './components/words'
import { createContext, useState, useEffect } from 'react';
import Gameover from './components/Gameover';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currPos, setCurrPos] =useState({attempt: 0, position: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [gameover, setGameover] = useState({gameover : false, correct : false});
  const [corrWord, setCorrectWord] =useState("");
  
  const keyState={};

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      console.log(words.todaysWord);
    });
  }, []);

  const onSelect=(val)=>{
    if(currPos.position>4) {
      return;
    }
    const currBoard = [...board];
    currBoard[currPos.attempt][currPos.position]=val;
    setCurrPos({...currPos, position: currPos.position+1});
    setBoard(currBoard);
  } 
  const onDelete=()=>{
    if(currPos.position===0) return;
      const newBoard = [...board];
      newBoard[currPos.attempt][currPos.position-1]="";
      setCurrPos({...currPos, position: currPos.position-1});
      setBoard(newBoard);
  }
  const onEnter=()=>{
    if(currPos.position===5){
      let currWord="";
      for(let i=0;i<5;i++){
        currWord+=board[currPos.attempt][i];
      }
      currWord+="\r";
      if(wordSet.has(currWord.toLowerCase())){
        setCurrPos({attempt: currPos.attempt+1, position: 0});
      }
      else {
        alert("not found");
      }
      if(currWord===corrWord){
        setGameover({gameover:true, correct:true});
      }
      else if(currPos.attempt===5){
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
