import React, { useEffect, useState } from 'react'

const UseMap = () => {
    const [Product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false)

    async function fetchProduct (){
        setLoading(true)
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setProduct(data)
            setLoading(false)
        }catch(e){
            console.log(e.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])
  return (
    <div className='w-full h-full flex flex-col items-center'>
      {
        Product.map((item)=>{
            return(
                <li className='list-none' key={item.id}>{item.title}</li>
            )
        })
      }
    </div>
  )
}

export default UseMap
