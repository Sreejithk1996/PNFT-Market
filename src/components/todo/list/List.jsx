import React from 'react'
import Low from '../../priority/Low'
import DateTime from '../../date/DateTime'

function List({data}) {
  return (
    <div className='flex flex-col gap-3'>
        {data.map(item => {
            return(
                <div key={item.id} className='bg-white p-4 flex flex-col gap-3'>
                <Low priority={item.priority}/>
                <div>
                    <p className='text-[14px]'>{item.title}</p>
                </div>
                <DateTime createdAt={item.createdAt}/>
                </div>
            )
        } 
    )
}
    </div>
  )}

export default List
