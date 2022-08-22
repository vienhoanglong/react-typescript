import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-content';
import React from "react";
function App(){

  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos />
    </TodosContextProvider>
  );
}
export default App;
