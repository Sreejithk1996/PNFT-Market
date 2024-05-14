import React from 'react'
import List from '../list/List'

function ToDoCard() {
  return (
       <div className='bg-[#ECEEF4] h-[300px] p-3 rounded'>
            <div className='py-4'>
                <p className='font-semibold text-base'>TO DO</p>
            </div>
            <List/>
        </div>
  )
}

export default ToDoCard
