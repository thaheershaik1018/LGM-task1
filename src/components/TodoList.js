import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


export default function TodoList() {
    //state array which holds all Todos
    const [todos, setTodos] = useState([]);
    
    //add tasks to list
    const addTask = task =>{
        if (!task.text){
            return
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    //remove task from list
    const removeTask = id =>{
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }

    //task is completed
    const completeTask= id => {
        let updatedTasks = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)

    }


  
    return (
    <div>
        <TodoForm addTask={addTask} ></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>
  )
} 