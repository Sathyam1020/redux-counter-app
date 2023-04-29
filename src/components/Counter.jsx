import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//* TO GET THE INITIAL STATE OF THE FUNCTION WE HAVE TO USE USE SELECTOR: 
//* TO GET THE FUNCTION IN THE REDUCER WE HAVE TO USE USE DISPATCH 

import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => dispatch(increment())}>
            Increment
        </button>

        <br/>
        <br/>

        <div>
            {count}
        </div>

        <br/>
        <br/>

        <button onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter;