import React, { useState } from 'react';
import axios from 'axios';

const TodoRemove = () => {
    const [id, setId] = useState('');

    const handleChange = event => {
        setId(event.target.value);
        console.log(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://todo.omsent.in/api/tasks/1/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Person ID:
                    <input type="number" name="id" />
                </label>
                <button onClick={handleChange} type="submit">Delete</button>
            </form>
        </div>
    );
};

export default TodoRemove;