import React from "react";
import { Todo } from "../model";

export type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
