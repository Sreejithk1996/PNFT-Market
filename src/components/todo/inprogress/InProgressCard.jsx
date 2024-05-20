import React from 'react'
import List from '../list/List'


function InProgressCard({data}) {
  const inProgressData = data.filter(item => item.status === 1);
  return (
    <div className='bg-[#ECEEF4] h-auto p-3 rounded sm:w-[330px] md:w-[700px]'>
        <div className='py-4'>
            <p className='font-semibold text-base'>IN PROGRESS</p>
        </div>
        <List data={inProgressData} />
    </div>
  )
}

export default InProgressCard
