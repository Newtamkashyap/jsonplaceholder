
import { useState } from "react";

export default function TodoList() {

    const [todoList, setTodoList] = useState([{
        "id": 2,
        "title": null,
        "task": "Go to Walking",
        "completed": false,
        "createDate": null
    },
    {
        "id": 3,
        "title": null,
        "task": "Go to swimming",
        "completed": false,
        "createDate": null
    }]);

    let listItems = todoList.map(obj => <p key={obj.id}>{obj.id} {obj.task}</p>)


    return (
        <div>
            <p>Todo</p>
            {listItems}

            {/* <ul>
                {todoList.map(temp => <li key={temp.id}>{temp.id} {temp.task} {temp.completed}</li>)}
            </ul> */}

            {todoList.map(todo => <p key={todo.id}>{todo.id} {todo.task} </p>)}

            <ul>
                {todoList.map(obj => <li key={obj.id}>{obj.task} {obj.id}</li>)}

            </ul>

          {todoList.map(obj1=>
           <span key={obj1.id}> {obj1.task}{obj1.task}</span>

          )}

        </div >
    )
}
