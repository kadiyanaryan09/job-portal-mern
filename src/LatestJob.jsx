import React from 'react'
import Latestjobcards from './Latestjobcards'
const randomJobs =[1,3,2,3,4,5,6,5]
const LatestJob = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
       <h1 className='text-4xl font-bold'><span className='text-fuchsia-900'> Latest & Top </span>Job opening</h1>
       <div className='grid grid-cols-3 gap-4 my-5'>
         {randomJobs.slice(0,6).map((elem,index)=><Latestjobcards/>)
         }
         </div>

    </div>
  )
}

export default LatestJob
