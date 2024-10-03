import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice/Counter'
import Navbar from './components/Navbar/Navbar'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar/>
      <h1>Counter App</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default App
