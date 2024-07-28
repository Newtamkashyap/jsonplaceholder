import logo from './logo.svg';
import './App.css';
import PersonList from './personList';
import PersonAdd from './personAdd';
import PersonRemove from './personRemove';
import Todolist from './todo/todoList';
import TodoView from './todo/todoView';
import TodoEdit from './todo/todoEdit';
import TodoUpdate from './todo/todoUpdate';
import TodoRemove from './todo/todoRemove';
import TodoList from './todo/todoList';

function App() {
  return (
    <>
   

   {/* <Todolist/> */}
   {/* <TodoView/> */}
   {/* <TodoEdit/> */}
   {/* <TodoUpdate/> */}
   <Todolist/>
   <TodoRemove/>
    </>
  );
}

export default App;
