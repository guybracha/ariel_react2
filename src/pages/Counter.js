import React,{useContext} from 'react'
import { AppContext } from '../context/Context';
import CounterChild from '../comp/CounterChild'

export default function Counter() {
    const {counter} = useContext(AppContext);

  return (
    <div className='container'>
      <h2>Counter: {counter}</h2>
      <CounterChild />
    </div>
  )
}
