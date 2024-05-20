import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditDrop.css'

function EditDrop({ ItemId, currentStatus }) {
  const [status, setStatus] = useState(currentStatus);

  useEffect(() => {
    setStatus(currentStatus);
  }, [currentStatus]);

  const handleChange = (event) => {
    const newStatus = parseInt(event.target.value);
    setStatus(newStatus);
    axios.put(`https://663a5a501ae792804bef03fe.mockapi.io/todo/todo/${ItemId}`, { 'status': newStatus })
      .then(res => {
        window.location.reload();
      }).catch(err => {
        console.error('Error updating API:', err);
      })
  };

  return (
    <form className="max-w-sm mx-0">
      <div className="custom-select-wrapper">
        <select
          id="status"
          className="custom-select bg-[#0052CC] border-none text-[white] text-[12px] rounded-lg block w-full h-[30px] py-1 lg:w-[90px]"
          onChange={handleChange}
          value={status}
        >
          <option value="0">To Do</option>
          <option value="1">In Progress</option>
          <option value="2">Completed</option>
        </select>
      </div>
    </form>
  );
}

export default EditDrop;

