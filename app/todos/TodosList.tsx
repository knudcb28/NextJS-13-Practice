import React from 'react'
import {Todo} from "../../typings"
import Link from "next/link"

const fetchTodos = async () => {
    // timeout for random number of seconds bewtween 1 and 5
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout))

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json()
    console.log('This is the todos', todos)
    const trimmedTodos = todos.splice(0, 10)
    return trimmedTodos;
}

const TodosList = async () => {
  const todos = await fetchTodos()
  
  return (
    <>
    {todos.map((todo) => {
        return (
            <p key={todo.id}>
                <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
            </p>
        )
    })}
    </>
  )
}

export default TodosList