import React from 'react'
import calendar from "../../assets/images/calendar_today.svg"

function DateTime() {
  const today = Date.now();
 const d = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(today)
  return (
    <div className='w-[35%] bg-[#F7F7F7] flex justify-center items-center gap-2 px-2 py-2'>
      <img className='w-[14px]' src={calendar} alt="calendar" />
      <p className='text-[#646570] font-semibold text-[10px]'>{d}</p>
    </div>
  )
}

export default DateTime
