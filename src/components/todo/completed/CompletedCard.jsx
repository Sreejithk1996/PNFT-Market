import React from 'react'
import List from '../list/List'

function CompletedCard({data}) {
  const completedData = data.filter(item => item.status === 2);
  return (
    <div className='bg-[#ECEEF4] inline-block h-auto p-3 rounded sm:w-[350px] md:w-[700px]'>
        <div className='py-4'>
            <p className='font-semibold text-base'>COMPLETED</p>
        </div>
        <List data={completedData}/>
    </div>
  )
}

export default CompletedCard
