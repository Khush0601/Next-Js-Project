'use client'

import React, { useEffect, useState,type ChangeEvent, type FormEvent } from 'react'
import { toast } from 'react-toastify'

interface InputData {
  date: string
  task: string
  time: string
  taskDesc: string
}

const Page: React.FC = () => {
  const inputData: InputData = {
    date: "",
    task: "",
    time: "",
    taskDesc: ""
  }

  const [input, setInput] = useState<InputData>(inputData)
  const [todos, setTodos] = useState<InputData[]>([])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>, 
    type: keyof InputData
  ) => {
    setInput((p) => {
      return { ...p, [type]: e.target.value }
    })
  }

  useEffect(() => {
    const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos')
      const data = await res.json()
      setTodos(data)
    } catch (error) {
      console.error('Error fetching todos:', error)
       toast.error('Failed to load todos')
    }
  }
  fetchTodos()
  }, [])

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // toast.info('Adding todo...')
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })

      if (res.ok) {
        const newTodo = await res.json()
        setTodos((prev) => [...prev, newTodo])
        setInput(inputData)
         toast.success('Todo added successfully!')
      } else {
        console.error('Failed to add todo')
         toast.error('Failed to add todo')
      }
    } catch (error) {
      console.error('Error posting todo:', error)
      toast.error('Something went wrong!')
    }
  }



  console.log(todos)

  console.log(input)

  return (
    <div className="w-full h-full bg-red-100 p-4 sm:p-10">
      <div>
        <div className="font-bold text-4xl my-4">
          Todo
        </div>
        <div className="w-full">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="md:flex gap-2">
              <input
                type="date"
                placeholder="Enter date"
                className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
                value={input.date}
                onChange={(e) => handleInputChange(e, 'date')}
              />
              <input
                type="text"
                placeholder="Enter task"
                className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
                value={input.task}
                onChange={(e) => handleInputChange(e, 'task')}
              />
            </div>
            <div className="md:flex gap-2">
              <input
                type="text"
                placeholder="Enter time"
                className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
                value={input.time}
                onChange={(e) => handleInputChange(e, 'time')}
              />
              <input
                type="text"
                placeholder="Enter task description"
                className="p-3 my-2 w-full lg:max-w-[500px] border rounded-md"
                value={input.taskDesc}
                onChange={(e) => handleInputChange(e, 'taskDesc')}
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

      <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-4">Your Todos</h2>
          {todos.length === 0 ? (
            <p>No todos yet</p>
          ) : (
            <ul className="space-y-2">
              {todos.map((todo, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-white rounded-md shadow-sm border"
                >
                  <div className="font-bold">{todo.task}</div>
                  <div>{todo.taskDesc}</div>
                  <div className="text-sm text-gray-500">
                    {todo.date} at {todo.time}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  )
  
}

export default Page
