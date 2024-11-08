import React, { useEffect, useState } from 'react'

const LoadingFile = () => {
    const [Data , setData] = useState([])
    async function product (){
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/comments")
            const result = await response.json()
            setData(result)
            console.log(result)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        product()
    },[])
  return (
    <div>
      {Data.map((item)=>{
        return(
            <p>{item.name}</p>
        )
      })}
    </div>
  )
}

export default LoadingFile
