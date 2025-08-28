'use client'
import React, { useState } from 'react'

const Page = () => {
  const inputData={
    date:"",
    task:"",
    time:"",
    taskDesc:""

  }
  const [input,setInput]=useState(inputData)

  const handleInputChange=(e,type)=>{
   setInput((p)=>{
    return {...p,[type]:e.target.value}
   })
  }

console.log(input)
  return (
  <div className="w-full h-full bg-red-100 p-4 sm:p-10">
  <div>
    <div className='font-bold text-4xl my-4 '>
    Todo
  </div>
<div className="w-full">
  <form className="flex flex-col">
    <div className="md:flex gap-2">
      <input 
        type="date" 
        placeholder="Enter date" 
        className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
        value={input.date}
        onChange={(e)=>handleInputChange(e,'date')}

      />
      <input 
        type="text" 
        placeholder="Enter task" 
        className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
        value={input.task}
        onChange={(e)=>handleInputChange(e,'task')}
      />
    </div>
    <div className="md:flex gap-2">
      <input 
        type="text" 
        placeholder="Enter time" 
        className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
        value={input.time}
        onChange={(e)=>handleInputChange(e,'time')}
      />
      <input 
        type="text" 
        placeholder="Enter task description" 
        className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
        value={input.taskDesc}
        onChange={(e)=>handleInputChange(e,'taskDesc')}
      />
    </div>
   
     <button 
  type="submit" 
  className="w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300 mx-auto block lg:mx-0 lg:block lg:self-start lg:my-4 "

>
  Add
</button>
 
  </form>
</div>

  </div>

</div>
      
   

  )
}

export default Page