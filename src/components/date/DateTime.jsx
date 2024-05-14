import React from 'react'
import calendar from "../../assets/images/calendar_today.svg"

function DateTime({createdAt}) {
  const parsedDate = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(parsedDate);

  return (
    <div className='w-[35%] bg-[#F7F7F7] flex justify-center items-center gap-2 px-2 py-2'>
      <img className='w-[14px]' src={calendar} alt="calendar" />
      <p className='text-[#646570] font-semibold text-[10px]'>{formattedDate}</p>
    </div>
  );
}

export default DateTime;
