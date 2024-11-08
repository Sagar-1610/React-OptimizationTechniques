import React, { useMemo, useState } from 'react'

const Amemo = () => {
    const [add , setAdd] = useState(0)
    const [ minus, setMinus] = useState(100)

  const multiplication =  useMemo( function mulitply (){
        console.log("********************")
       return add *10
    },[add])
  return (
    <div>
      <div>{multiplication}</div>
      <button onClick={()=>setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <br />
      <button onClick={()=>setMinus(minus - 1 )}>Minus</button>
      <span>{minus}</span>
    </div>
  )
}

export default Amemo
