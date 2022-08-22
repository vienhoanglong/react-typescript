import React from "react";
import styles from "./TodoItem.module.css"
export const TodoItem: React.FC<{text: string, onRemoveTodo: ()=> void}> = (props) => {
    return (
        <li className={styles.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}
