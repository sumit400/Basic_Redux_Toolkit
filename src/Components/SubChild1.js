import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue } from '../features/counter/counterSlice'

const SubChild1 = () => {

    const dispatch = useDispatch();

    const data = useSelector((c)=>{
        console.log(c.show.value)
        return c.show.value 

    })
  return (


    <div>
        
     <h1>SubChild1 - {data}</h1>
     <button onClick={()=> dispatch(increment())}>Click Me</button>
     <button onClick={()=> dispatch(incrementByValue(10))}>Increase By Value</button>
        
    </div>
  )
}

export default SubChild1