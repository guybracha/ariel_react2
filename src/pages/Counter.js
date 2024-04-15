import React from 'react'
import CounterChild from '../comp/CounterChild'

export default function Counter() {
  return (
    <div className='container'>
      Counter
      <CounterChild/>
    </div>
  )
}
