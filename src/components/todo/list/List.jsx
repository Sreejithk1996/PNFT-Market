import React from 'react'
import Low from '../../priority/Low'
import Medium from '../../priority/Medium'
import High from '../../priority/High'
import Highest from '../../priority/Highest'
import DateTime from '../../date/DateTime'
import Del from '../../../assets/images/Vector.svg'
import EditDrop from '../../edit/EditDrop'
import axios from 'axios'


function List({data}) {

    const handleClick = (ItemId) => {
    
        
        axios.delete(`https://663a5a501ae792804bef03fe.mockapi.io/todo/todo/${ItemId}`)
        .then(res=>{
            window.location.reload(res);
        }).catch(err=>{
            console.error('Error updating API:', err);
        })
      };
    
  return (
    
    <div className='flex flex-col gap-3 '>
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
                <div key={item.id} className='bg-white p-4 flex flex-col gap-3 rounded drop-shadow  hover:drop-shadow-lg'>
                    <div className='flex justify-between'>
                        {priorityComponent}
                        <button onClick={() => handleClick(item.id)}><div className='bg-[#e84343] w-[18px] h-[18px] rounded flex justify-center items-center hover:animate-bounce delay-100ms'><img className ='w-[10px] h-[10px]' src={Del} alt="" /></div></button>
                    </div>
                    <div>
                        <p className='text-[14px] font-medium'>{item.title}</p>
                    </div>
                    <div className='flex justify-between items-center gap-[115px]'>
                        <DateTime createdAt={item.createdAt}/>
                        <EditDrop ItemId = {item.id}/>
                    </div> 
                </div>
            )
        } 
    )
}
    </div>
  )}

export default List
