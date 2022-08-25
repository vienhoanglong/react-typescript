import React from "react"
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./style.css"
import {Droppable} from "react-beautiful-dnd"
export type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completeTodos: Todo[],
    setCompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos, completeTodos, setCompleteTodos}) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided, snapshot)=>(
                    <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">Active Tasks</span>
                        {todos.map((todo, index)=>
                            <SingleTodo 
                                index = {index}
                                todo={todo}
                                key={todo.id} 
                                todos={todos} 
                                setTodos = {setTodos} 
                            />
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {(provided, snapshot)=>(
                    <div className={`todos  ${
                        snapshot.isDraggingOver ? "dragcomplete" : "remove"
                      }`} ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">Completed Tasks</span>
                        {completeTodos.map((todo, index)=>
                            <SingleTodo
                                index = {index} 
                                todo={todo}
                                key={todo.id} 
                                todos={completeTodos} 
                                setTodos = {setCompleteTodos} 
                            />
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;