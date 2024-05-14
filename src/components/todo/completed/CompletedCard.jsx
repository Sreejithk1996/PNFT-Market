import React from 'react'
import List from '../list/List'

function CompletedCard({data}) {
  const completedData = data.filter(item => item.status === 2);
  return (
    <div className='bg-[#ECEEF4] h-auto p-3 rounded'>
        <div className='py-4'>
            <p className='font-semibold text-base'>COMPLETED</p>
        </div>
        <List data={completedData}/>
    </div>
  )
}

export default CompletedCard
