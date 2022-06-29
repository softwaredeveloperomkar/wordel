import React from 'react'
import { useContext } from "react";
import { AppContext } from "../App";

function Key( {val}) {
  const {onSelect, onDelete, onEnter, keyState} = useContext(AppContext);
  
  let mystate="";
  if( val==="Enter"|| val==="Delete"){
    mystate = "big"
  }
  else if(val in keyState){
    mystate = keyState[val];
  }

  const selectLetter =()=>{
    if(val==="Enter" ){
      onEnter();
    }
    else if(val==="Delete" ){
      onDelete();
    }
    else{
      onSelect(val);
    }
  }
  return (
    <div className='key' id= {mystate} onClick={selectLetter}>
      {val}
    </div>
  )
}

export default Key
