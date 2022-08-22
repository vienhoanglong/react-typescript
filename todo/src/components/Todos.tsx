import React, { useContext } from "react";
import styles from "./Todos.module.css";
import { TodoItem } from "./TodoItem";
import {TodosContent} from "../store/todos-content"
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContent)
    return (
        <ul className={styles.todos}>
            {todosCtx.items.map((e)=>(
                <TodoItem 
                key={e.id} 
                text={e.text} 
                onRemoveTodo={todosCtx.removeTodo.bind(null, e.id)}/>
            ))}
        </ul>
    );
};
export default Todos
