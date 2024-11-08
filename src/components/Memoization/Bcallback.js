import React, { useCallback, useState } from 'react'
import Child from './Child';

const Bcallback = () => {
    const [add,setAdd] = useState(0);
    const [minus, setMinus] = useState(100)

    const Learning = useCallback(()=>{

    },[minus])
  return (
    <div>
       <Child Learning={Learning}/>
       <div>{add}</div>
      <button onClick={()=>setAdd(add+1)}>Add</button>
      <br />
      <div>
        <p>{minus}</p>
        <button onClick={()=>setMinus(minus-1)}>Subtract</button>
      </div>
    </div>
  )
}

export default Bcallback
