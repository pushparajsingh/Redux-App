import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Increment,Decrement} from '../actions/action'
import { INC } from '../constant'

export default function Component1() {

  const data = useSelector((state)=> state.rootReducer.data)
  console.log(data)
  const dispatch = useDispatch();

  const abc =()=>{
    console.log(444)
    dispatch(Increment())
  }
  const xyz =()=>{
    dispatch(Decrement())
  }

  return (
    <div>
        <h1>hello world</h1>
         <h2>Counter: {data}</h2> 
        <button onClick={()=>abc()}>Increment</button>
        <button onClick={()=>xyz()}>Decrement</button>
    </div>
  )
}
