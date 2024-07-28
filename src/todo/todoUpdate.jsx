import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoUpdate() {

    const [todo, setTodo] = useState({});

    function handleChange(e) {
        setTodo(e.target.value);
        console.log(e.target.value)

    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    const change = {
        "task": "Go to Walking",
        "completed": false
    }


    axios.post('https://todo.omsent.in/api/tasks',change)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setTodo();
        });




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>updateTodo
                    <input type='text' onChange={handleChange} />
                </label>
                <button type='submit'>Add</button>

            </form>
        </div>
    );
};