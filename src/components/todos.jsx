import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-xl font-semibold m-4">Todos</div>
            <ul className="list-disc pl-5">
                {todos.map((todo) => (
                    <li key={todo.id} className="mb-2 flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                        <span className="text-gray-800">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todos;
