import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function InputItem() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  console.log(todos);

  return(
    <ul>
      {
        todos.map(todo => ( 
          <li key={todo.id}>
            <h1>{todo.text}</h1>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))
      }
    </ul>
  )
}

export default InputItem