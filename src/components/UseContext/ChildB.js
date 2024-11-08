import React, { useContext, useState } from 'react'
import { GlobalContext } from './ContextApi'

const ChildB = () => {
    const {add,setAdd} = useContext(GlobalContext)
    
  return ( 
    <div>
      <p>{add}</p>
      <button onClick={()=>setAdd(add+1)}>Add</button>
    </div>
  )
}

export default ChildB
