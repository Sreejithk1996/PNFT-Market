import React from 'react'
import ToDoCard from './todocard/ToDoCard';
import InProgressCard from './inprogress/InProgressCard';
import CompletedCard from './completed/CompletedCard';
import HeaderBar from './headerbar/HeaderBar';

function ToDo() {
  return (
    <div className='h-dvh my-6 mx-[100px]'>
        <div className='flex items-center justify-between border-b-[0.5px] py-3'>
           <HeaderBar/>
        </div>

        <div className='py-6 grid grid-cols-3 grid-rows-1 gap-4'>
            <ToDoCard/>
            <InProgressCard/>
            <CompletedCard/>
        </div>
    </div>
  )
}

export default ToDo
