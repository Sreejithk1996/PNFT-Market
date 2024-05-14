import React from 'react'
import ToDoCard from './todocard/ToDoCard';
import InProgressCard from './inprogress/InProgressCard';
import CompletedCard from './completed/CompletedCard';
import HeaderBar from './headerbar/HeaderBar';
import axios from 'axios'
import { useEffect,useState } from 'react'

function ToDo() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://663a5a501ae792804bef03fe.mockapi.io/todo/todo')
        .then(res=>{
            setData(res.data.slice(0,30));
        }).catch(err=>{
            console.log(err)
    })
    },[])


  return (
    <div className='h-dvh my-6 mx-[100px]'>
        <div className='flex items-center justify-between border-b-[0.5px] py-3'>
           <HeaderBar/>
        </div>

        <div className='py-6 grid grid-cols-3 grid-rows-1 gap-4'>
            <ToDoCard data={data}/>
            <InProgressCard data={data}/>
            <CompletedCard data={data}/>
        </div>
    </div>
  )
}

export default ToDo
