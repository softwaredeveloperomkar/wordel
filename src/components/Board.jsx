import React, { useState } from 'react'
import Letter from './Letter';


function Board() {
  return (
    <div className='board'>
      <div className="row">
        <Letter row={0} col={0}/>
        <Letter row={0} col={1}/>
        <Letter row={0} col={2}/>
        <Letter row={0} col={3}/>
        <Letter row={0} col={4}/>
      </div>
      <div className="row">
        <Letter row={1} col={0}/>
        <Letter row={1} col={1}/>
        <Letter row={1} col={2}/>
        <Letter row={1} col={3}/>
        <Letter row={1} col={4}/>
      </div>
      <div className="row">
        <Letter row={2} col={0}/>
        <Letter row={2} col={1}/>
        <Letter row={2} col={2}/>
        <Letter row={2} col={3}/>
        <Letter row={2} col={4}/>
      </div>
      <div className="row">
        <Letter row={3} col={0}/>
        <Letter row={3} col={1}/>
        <Letter row={3} col={2}/>
        <Letter row={3} col={3}/>
        <Letter row={3} col={4}/>
      </div>
      <div className="row">
        <Letter row={4} col={0}/>
        <Letter row={4} col={1}/>
        <Letter row={4} col={2}/>
        <Letter row={4} col={3}/>
        <Letter row={4} col={4}/>
      </div>
      <div className="row">
        <Letter row={5} col={0}/>
        <Letter row={5} col={1}/>
        <Letter row={5} col={2}/>
        <Letter row={5} col={3}/>
        <Letter row={5} col={4}/> 
      </div>
    </div>
  )
}

export default Board
