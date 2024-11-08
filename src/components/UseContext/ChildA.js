import React, { useContext, useState } from 'react'
import ChildB from './ChildB'
import { GlobalContext } from './ContextApi'

const ChildA = () => {
    const {minus,setMinus} = useContext(GlobalContext)
  return (
    <div>
      <ChildB/>
      <p>{minus}</p>
      <button onClick={()=>setMinus(minus - 1)}>Subtract</button>
    </div>
  )
}

export default ChildA
