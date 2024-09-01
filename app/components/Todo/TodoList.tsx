import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
          <tr>
            <th className="rounded-l-lg">Tasks</th>
            <th className="rounded-r-lg text-right">Actions</th>
          </tr>
          </thead>
          <tbody>
          {tasks.map((task) => (
              <Task key={task.id} task={task} />
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default TodoList;
