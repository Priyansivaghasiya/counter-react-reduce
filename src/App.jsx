import React, { useState } from 'react'
import './style.css'
import { useDispatch,useSelector } from 'react-redux';
import CounterSlice from './counter';


const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(store => store.counter)

  function countUpdate(e) {
      dispatch(CounterSlice.actions.incCount());
      
  }
  
  function countclick(e) {
    dispatch(CounterSlice.actions.decCount());
  }
  function countreset(e) {
    dispatch(CounterSlice.actions.resetCount());
  }


  console.log("App.jsx ");
  return (
    <div className='start'>
      <div className='first'>
        <h1 className='counter'>Counter</h1>
        <h1>{count}</h1>
        <div className='button'>
          <button onClick={countUpdate}>increment</button>
          <button onClick={countclick}>decrement</button>
          <button onClick={countreset}>Reset</button>
        </div>
      </div>
      </div>
  )
}

export default App
