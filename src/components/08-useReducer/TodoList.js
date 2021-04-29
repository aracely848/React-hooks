import React from 'react';
import { TodoListITem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListITem
                        key = {todo.id}
                        todo = {todo}
                        index = {i}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}
                    />
                ))
            }
        </ul>
    )
}