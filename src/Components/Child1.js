import React from 'react'
import SubChild1 from './SubChild1'

const Child1 = (props) => {
  return (
    <div>
        <SubChild1 subval = {props.val}/>
    </div>
  )
}

export default Child1