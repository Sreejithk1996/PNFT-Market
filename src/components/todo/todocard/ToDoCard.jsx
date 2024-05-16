import React from 'react'
import List from '../list/List'
import plus from '../../../assets/images/Group 4.svg'


function ToDoCard({data}) {
    const todoCardData = data.filter(item => item.status === 0);
  return (
       <div className='bg-[#ECEEF4]  h-auto p-3 rounded sm:w-[350px] md:w-[700px]'>
            <div className='py-4'>
                <p className='font-semibold text-base'>TO DO</p>
            </div>
            <List data={todoCardData} />
            <button >
            <div className='flex items-center gap-2 py-3 hover:drop-shadow-2xl'>
                <img src={plus} alt="" />
                <p className='text-[12px] font-semibold'>Add another card</p>
            </div>
            </button>
        </div>
  )
}

export default ToDoCard



























