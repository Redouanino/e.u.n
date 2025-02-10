"use client";


import React, {useEffect} from "react";
import Task from "./Task";
import {Todo} from "@prisma/client";



interface TodoListProps {
todos: Todo[] | null;

handleRefetch: () => void;

}


const TodoList: React.FC<TodoListProps> = ({ todos, handleRefetch}) => {

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
          {todos && todos.map((task, index) => (
              <Task key={task.id} className={index %2 == 1 ? '!bg-black-20':''} task={task} handleRefetch={handleRefetch} />
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default TodoList;
