import React from 'react'
import Low from '../../priority/Low'
import DateTime from '../../date/DateTime'

function List() {
  return (
    
    <div className='bg-white p-4 flex flex-col gap-3'>
      <Low/>
      <div>
        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <DateTime/>
    </div>
  )
}

export default List
