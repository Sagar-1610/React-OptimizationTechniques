import React, { Suspense } from 'react'

const  LazyComponent = React.lazy(()=>import("./LoadingFile"))

const Index = () => {
  return (
    <div >
     <Suspense fallback={<div>Loading Data Please wait......</div>}> 
        <LazyComponent/>
      </Suspense>  
    </div>
  )
}

export default Index
