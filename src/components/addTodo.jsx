import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandle = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandle} className=" flex justify-between  m-5">
            <input
                type="text"
                placeholder="Enter todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
            >
                Submit
            </button>
        </form>
    );
};

export default AddTodo;
