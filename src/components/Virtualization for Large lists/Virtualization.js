import React from 'react'
import Container from './Container'

const Virtualization = () => {
    const List = Array.from({length:100000},(_,index)=>index+1)

  return (
    <div>
      <Container height={400} width={500} itemHeight={40} List={List}/>
    </div>
  )
}

export default Virtualization


