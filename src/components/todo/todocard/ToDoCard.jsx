import React, { useState } from 'react'
import List from '../list/List'
import axios from 'axios'
import { useEffect } from 'react'


function ToDoCard() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://663a5a501ae792804bef03fe.mockapi.io/todo/todo')
        .then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
    })
    },[])


  return (
       <div className='bg-[#ECEEF4] h-[300px] p-3 rounded'>
            <div className='py-4'>
                <p className='font-semibold text-base'>TO DO</p>
            </div>
            <List data={data} />
        </div>
  )
}

export default ToDoCard






















        // axios.get('https://663a5a501ae792804bef03fe.mockapi.io/todo/todo')
        // .then(res =>{ 
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })    
