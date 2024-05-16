import React, { useState } from 'react';
import Del from '../../assets/images/Vector.svg';
import calendar from '../../assets/images/calendar_today.svg';
import Low from '../priority/Low';
import axios from 'axios';

function getCurrentDate() {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
}

export default function CreateModal({ pop, setPop }) {
  const currentDate = getCurrentDate();
  const [task, setTask] = useState({ 
    title: '',
    status: 0
  });

  function handleExit() {
    setPop(false);
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://663a5a501ae792804bef03fe.mockapi.io/todo/todo', task)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }

  if (pop) {
    document.body.classList.add('activePop');
  } else {
    document.body.classList.remove('activePop');
  }

  return (
    <>
      {pop && (
        <div className='bg-white p-4 flex flex-col gap-5 rounded drop-shadow hover:drop-shadow-lg'>
          <div className='flex justify-between'>
            <Low />
            <button onClick={handleExit}><div className='bg-[#e84343] w-[18px] h-[18px] rounded flex justify-center items-center'><img className='w-[10px] h-[10px]' src={Del} alt="" /></div></button>
          </div>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className="form-control flex flex-col gap-2">
              <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="task">Assign Task</label>
              <input name="title" className="border-[1px] border-[#D0D5DD] rounded-lg h-[40px] p-2 focus:border-[#5429FF] outline-none border-2" type="text" placeholder="Task Details..." onChange={handleInput} />
            </div>
            <div className='flex justify-between'>
              <div className='w-[25%] bg-[#F7F7F7] flex justify-center items-center gap-2 px-2 py-2 lg:w-[45%]'>
                <img className='w-[14px]' src={calendar} alt="calendar" />
                <p className='text-[#646570] font-semibold text-[10px]'>{currentDate}</p>
              </div>
              <button type="submit" className="text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[40px] bg-[#5429FF] w-[30%] hover:bg-[#492bbd]">Add</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
