import React from 'react'
import List from '../list/List'

function CompletedCard({data}) {
  const completedData = data.filter(item => item.status === 2);
  return (
    <div className='bg-[#dccef0] h-auto p-3 rounded sm:w-[350px] md:dvw'>
        <div className='py-4'>
            <p className='font-semibold text-base'>COMPLETED</p>
        </div>
        <List data={completedData}/>
    </div>
  )
}

export default CompletedCard
