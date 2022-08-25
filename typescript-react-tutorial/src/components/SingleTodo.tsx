import React, { useEffect, useRef, useState } from "react"
import { Todo } from "../model"
import {AiOutlineEdit, AiOutlineDelete, AiOutlineCheck, AiOutlineClose} from "react-icons/ai"
import { Draggable } from "react-beautiful-dnd"
export type Props = {
    index: number
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({index, todo, todos, setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) =>{
        setTodos(
            todos.map((todo)=> 
                todo.id === id ? {...todo, isDone: !todo.isDone}: todo
            )
        )
    }

    const handleDelete = (id: number)=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const handleEdit = (submit: React.FormEvent, id: number)=>{
        submit.preventDefault()
        setTodos(todos.map((todo)=> (todo.id === id ? {...todo, todo: editTodo} :todo)))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus();
    }, [edit])

    return (
        <Draggable draggableId={todo.id.toString()} index={index}> 
            {(provided, snapshot)=>(
                <form  className={`todos__single ${snapshot.isDragging ? "drag" : ""}`} onSubmit={(e)=> handleEdit(e, todo.id)}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {/* Check to do can edit */}
                    {!edit?(
                        // Check todo Done
                        todo.isDone?(
                            <s className="todos__single--text">{todo.todo}</s>
                        ):(
                            <span className="todos__single--text">{todo.todo}</span>
                        )
                    ):(
                        <input className="todos__single--text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
                    )}
                    <div>
                        <span className="icon" onClick={()=>{
                            if(!edit && !todo.isDone){
                                setEdit(!edit)
                            }
                        }}>
                            <AiOutlineEdit/>
                        </span>
                        <span className="icon" onClick={()=>handleDelete(todo.id)}>
                            <AiOutlineDelete/>
                        </span>
                        <span className="icon" onClick={()=>handleDone(todo.id)}>
                            {todo.isDone?(
                                <AiOutlineClose/>
                            ):(
                                <AiOutlineCheck/>
                            )}
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    )
}

export default SingleTodo