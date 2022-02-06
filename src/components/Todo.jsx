import { useEffect, useState } from "react"
import { TodoInput } from "./todosInput"
import {Task} from './todosItem'

export const Todo=()=>{
    const [todos, setTodos]=useState([])
    const [page, setPage]=useState(1)

    useEffect(()=>{
        getData()
    },[page])
    const getData=()=>{
        fetch(`https://fake-api-project-for-masai.herokuapp.com/tasks?_page=${page}&_limit=5`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setTodos(res)
        })
    }
    const handleClick=(title, task)=>{
        const payload={
            title:title,
            task:task,
        }
        fetch('https://fake-api-project-for-masai.herokuapp.com/tasks',{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                'content-type':'application/json'
            },
        }).then(getData)
    }

    const RemoveTask=(id)=>{
        fetch(`https://fake-api-project-for-masai.herokuapp.com/tasks/${id}`,{
            method:'DELETE'
        }).then(getData)
    }

    return(
        <div className="todos">
            <h1 className="title">Todo...</h1>
            <TodoInput handleClick={handleClick} />
            {
                todos.map((e)=>{
                   return <Task title={e.title} task={e.task} id={e.id} deleteTask={RemoveTask} />

                })
            }
            <button className="prev" onClick={()=>setPage(page-1)}>Prev</button>
            <button className="next" onClick={()=>setPage(page+1)}>Next</button>
        </div>
    )
}