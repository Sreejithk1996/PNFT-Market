import React from 'react'
import Low from '../../priority/Low'
import Medium from '../../priority/Medium'
import High from '../../priority/High'
import Highest from '../../priority/Highest'
import DateTime from '../../date/DateTime'

function List({data}) {
  return (
    <div className='flex flex-col gap-3'>
        {data.map(item => {
              let priorityComponent;
              switch (item.priority) {
                case 0:
                  priorityComponent = <Low/>;
                  break;
                case 1:
                  priorityComponent = <Medium/>;
                  break;
                case 2:
                  priorityComponent = <High />;
                  break;
                case 3:
                  priorityComponent = <Highest />;
                  break;
                default:
                  priorityComponent = null;
                  break;
              }
            return(
                <div key={item.id} className='bg-white p-4 flex flex-col gap-3 rounded drop-shadow'>
                {priorityComponent}
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
