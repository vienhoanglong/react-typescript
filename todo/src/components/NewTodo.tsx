import React, { useContext, useRef } from "react";
import styles from "./NewTodo.module.css"
import { TodosContent } from "../store/todos-content";
export const NewTodo:React.FC = () => {
    const todosCtx = useContext(TodosContent)
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        if(enteredText.trim().length === 0){
            //throw an error
            return;
        }
        todosCtx.addTodo(enteredText)
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;