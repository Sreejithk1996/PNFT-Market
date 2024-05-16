import React from 'react'
import ToDoCard from './todocard/ToDoCard';
import InProgressCard from './inprogress/InProgressCard';
import CompletedCard from './completed/CompletedCard';
import HeaderBar from './headerbar/HeaderBar';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'

function ToDo() {
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoader(true);
        axios.get('https://663a5a501ae792804bef03fe.mockapi.io/todo/todo')
            .then(res => {
                setData(res.data);
                setLoader(false); 
            }).catch(err => {
                console.log(err);
                setLoader(false); 
            });
    }, []);

    return ( 
        <>
        <div className='h-dvh my-6 mx-[100px] sm:w-[1100px] sm:mx-[20px] md:mx-[50px] md:overflow-x-ato md:w-[2500px]'>
            {loader ? (
                <div className="flex justify-center items-center h-full sm:overflow-x-auto">
                    <Audio height="80" width="80" radius="9" color="#AE9AFF" ariaLabel="three-dots-loading" wrapperStyle wrapperClass/>
                </div>) : (
                <>
                    <div className='flex items-center justify-between border-b-[0.5px] py-3'>
                        <HeaderBar />
                    </div>
                    <div className='py-6 grid grid-cols-3 grid-rows-1 gap-4'>
                        <ToDoCard data={data} />
                        <InProgressCard data={data} />
                        <CompletedCard data={data} />
                    </div>
                </>   
            )}
        </div>  
        </>
    );
}

export default ToDo;







