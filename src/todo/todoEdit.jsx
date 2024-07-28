import { useEffect, useState } from "react";
import axios from "axios";


export default function TodoEdit() {

    // const [todo, setTodo] = useState([{}]);----,here we will get one output because we passed empty object as{}
    const [todo, setTodo] = useState([]);

    // function getTodoList(){
    //     axios.get('https://todo.omsent.in/api/tasks')
    //     .then(obj=>{
    //         console.log(obj)

    //     })


    // }
    // getTodoList(); ======Do your analysis and give the observations.

    useEffect(() => {
        // getTodoList();
        axios.get('https://todo.omsent.in/api/tasks')
            .then(obj => {
                console.log(obj.data)
                setTodo(obj.data)

            })
    }, [])







    return (
        <div>
            {/* <h4 onClick={getTodoList}>todo editlist</h4> */}
            <ol>{todo.map(obj => (
                <li key={obj.id}>{obj.task}</li>
            ))}</ol>
        </div>
    )
}