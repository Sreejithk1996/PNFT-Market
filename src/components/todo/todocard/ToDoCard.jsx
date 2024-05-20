import React,{useState} from 'react'
import List from '../list/List'
import plus from '../../../assets/images/Group 4.svg'
import CreateModal from '../../create/CreateModal';


function ToDoCard({data}) {
    const [pop,setPop] = useState(false)
    const todoCardData = data.filter(item => item.status === 0);console.log("data",data)

function handleClick(){
    setPop(true)
}

  return (
    <div>
       <div className='bg-[#ECEEF4] h-auto p-3 rounded sm:w-[350px] md:w-[700px]'>
            <div className='py-4'>
                <p className='font-semibold text-base'>TO DO</p>
            </div>
            <List data={todoCardData} />

            <button onClick={handleClick}>
                <div className='flex items-center gap-2 py-3 hover:drop-shadow-2xl'>
                    <img src={plus} alt="" />
                    <p className='text-[12px] font-semibold'>Add another card</p>
                </div>
            </button>
           <CreateModal pop={pop} setPop={setPop}/>
        </div>
    </div>
        
  )
}

export default ToDoCard



























