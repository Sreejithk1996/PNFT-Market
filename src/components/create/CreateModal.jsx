import React, { useState } from 'react';
import calendar from '../../assets/images/calendar_today.svg';
import Low from '../priority/Low';
import Medium from '../priority/Medium';
import High from '../priority/High';
import Highest from '../priority/Highest';
import axios from 'axios';
import CloseButton from '../close/CloseButton';

function getCurrentDate() {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
}

export default function CreateModal({ pop, setPop }) {
  const currentDate = getCurrentDate();
  const [task, setTask] = useState({ 
    title: '',
    status: 0,
    priority: ''
  });

  function handleExit() {
    setPop(false);
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log('New value:', value);
    setTask({ ...task, [name]: value });
    console.log('Task:', task);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting task:', task);
    const taskWithPriority = { ...task, priority: parseInt(task.priority) };

    axios.post('https://663a5a501ae792804bef03fe.mockapi.io/todo/todo', taskWithPriority)
      .then(() => {
        window.location.reload(); 
      }).catch(err => {
        console.error('Error Adding Data:', err);
      });
  }

  if (pop) {
    document.body.classList.add('activePop');
  } else {
    document.body.classList.remove('activePop');
  }

  let priorityComponent;
  switch (task.priority) {
    case '0':
      priorityComponent = <Low />;
      console.log(task.priority)
      break;
    case '1':
      priorityComponent = <Medium />;
      break;
    case '2':
      priorityComponent = <High />;
      break;
    case '3':
      priorityComponent = <Highest />;
      break;
    default:
      priorityComponent = null;
  }
  
  return (
    <>
      {pop && (
        <div className='bg-white p-4 flex flex-col gap-5 rounded drop-shadow hover:drop-shadow-lg'>
          <div className='flex justify-between'>
            <div>
              <form className="max-w-sm mx-0">
                <select
                  id="status"
                  name="priority"
                  className="bg-[#CBCCE8]  text-black text-[12px] rounded-lg  block w-full h-[30px] p-1 lg:w-[90px]"
                  onChange={handleInput}
                  value={task.priority}
                >
                  <option value="">Priority</option>
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                  <option value="3">Highest</option>
                </select>
              </form>
            </div>
            <button onClick={handleExit}><div ><CloseButton/></div></button>
          </div>
          {priorityComponent}
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
              <button type="submit" className="text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[40px] bg-[#0052CC] w-[25%] hover:bg-[#492bbd]">Add</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

