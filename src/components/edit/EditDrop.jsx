import React, { useState } from 'react';
import axios from 'axios';

function EditDrop({ ItemId }) {
  const handleChange = (event) => {
    const status = parseInt(event.target.value);
    console.log(ItemId)
    axios.put(`https://663a5a501ae792804bef03fe.mockapi.io/todo/todo/${ItemId}`, { 'status': status })
    .then(res=>{
        window.location.reload(res);
    }).catch(err=>{
        console.error('Error updating API:', err);
    })
  };

  return (
    <form className="max-w-sm mx-auto">
      <select
        id="status"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-gray-300 lg:w-[90px]"
        onChange={handleChange}
      >
        <option value="">Update</option>
        <option value="0">To Do</option>
        <option value="1">In Progress</option>
        <option value="2">Completed</option>
      </select>
    </form>
  );
}

export default EditDrop;
