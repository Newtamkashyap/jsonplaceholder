import { useEffect, useState } from "react"


export default function TodoView() {

    const [todo, setTodo] = useState(
        {
            // "id": 9,
            // "title": null,
            // "task": "Go to Newtam's home",
            // "completed": false,
            // "createDate": "2024-07-27T16:48:13"
        }
    );

    function updateTodo(){
        let obj=
            {
                "id": 11,
                "title": "Ashish roz ka kaam ",
                "task": "Go to Ashish's home",
                "completed": true,
                "createDate": "2024-07-27T16:50:14"
            }
            setTodo(obj);
        
    }

    useEffect(()=>{
        //updateTodo();

    },[])

    return (
        <div>
            <p>todo view details</p>
            <p>{todo.id} {todo.task} {todo.completed} </p>
            <button onClick={updateTodo}>Update Todo</button>
        </div>
    )
}