"use client";


import React, {useEffect} from "react";
import Task from "./Task";
import {Todo} from "@prisma/client";



interface TodoListProps {
todos: Todo[] | null;

}


const TodoList: React.FC<TodoListProps> = ({ todos }) => {

    return (
      <div className='overflow-x-auto'>
        <table className='table w-full z-0'>
          {/* head */}
          <thead>
          <tr>
            <th className="rounded-l-lg">Tasks</th>
            <th className="rounded-r-lg text-right">Actions</th>
          </tr>
          </thead>
          <tbody>
          {todos && todos.map((task) => (
              <Task key={task.id} task={task} />
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default TodoList;
