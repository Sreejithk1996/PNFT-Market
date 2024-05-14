import React from 'react'
import List from '../list/List'

function InProgressCard() {
  return (
    <div className='bg-[#ECEEF4]  h-[300px] p-3 rounded'>
        <div className='py-4'>
            <p className='font-semibold text-base'>IN PROGRESS</p>
        </div>
        <List/>
    </div>
  )
}

export default InProgressCard
