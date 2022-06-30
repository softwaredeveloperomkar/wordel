import React,{useCallback, useContext, useEffect} from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
  const {onSelect, onDelete, onEnter, gameover, currPos} = useContext(AppContext);
  const l1=["Q","W","E","R","T","Y","U","I","O","P"];
  const l2=["A","S","D","F","G","H","J","K","L"];
  const l3=["Z","X","C","V","B","N","M"];

  const handleKeyboard = useCallback((e)=>{ //this hook is difficult ... need to learn more
    if(gameover.gameover) return; // if game is over no need to get input
    if(e.key==="Enter"){
      onEnter();
    }
    else if(e.key==="Backspace"){
      onDelete();
    }
    else{ // else find matching key from keyboard 
      l1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelect(key);
        }
      });
      l2.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelect(key);
        }
      });
      l3.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelect(key);
        }
      });
    }
  },[currPos]);

  useEffect(()=>{ // ???
    document.addEventListener("keydown",handleKeyboard); 
    return ()=>{
      document.removeEventListener("keydown",handleKeyboard) ;
    };
  },[handleKeyboard]);
  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className="line1">
        { l1.map((key)=>{
          return <Key val={key}/>;
        })}
      </div>
      <div className="line2">
        { l2.map((key)=>{
          return <Key val={key}/>;
        })}
      </div>
      <div className="line3">
        <Key val={"Enter"}/>
        { l3.map((key)=>{
          return <Key val={key}/>;
        })}
        <Key val={"Delete"}/>
      </div>
    </div>
  )
}

export default Keyboard



