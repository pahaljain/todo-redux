import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function InputForm() {

  const [input , setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("");
  }

  return (
    <form onSubmit={addTodoHandler} type="submit">
      <input 
        type="text" 
        className='bg-red-100 w-128'
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        required 
        placeholder='todo' 
      />

      <button 
        type='submit'
      >Add</button>
    </form>
  )
}

export default InputForm