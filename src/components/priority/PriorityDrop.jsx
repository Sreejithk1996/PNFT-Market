import React from "react"

function PriorityDrop() {
  return (
    <form className="max-w-sm mx-0">
      <select
        id="status"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-gray-300 lg:w-[90px]">
        <option value="">Update</option>
        <option value="0">To Do</option>
        <option value="1">In Progress</option>
        <option value="2">Completed</option>
      </select>
    </form>
  )
}

export default PriorityDrop

