import React, { useState } from "react";


export function Todo() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo= (todo) => {
        const newTodo ={
            id: Math.random(),
            todo: todo,
        };

        setList([...list, newTodo]);

        setInput("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const removeTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    }

    return (
        <div>
        <h2>My To Do List:</h2>
        <p>New Item:</p>
        <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => addTodo(input)}>add</button>
        <ul>
            {list.map((todo) => (
            <li key={todo.id}>
                {todo.todo}
                <button onClick={() =>removeTodo(todo.id)}>remove</button>
            </li>
            ))}
        </ul>
</div>
    );
}