"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";
import {cn} from "@/libs/utils";

interface TaskProps {
  task: ITask;
  handleRefetch: () => void;
  className?: string;
}

const Task: React.FC<TaskProps> = ({ task, handleRefetch, className }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);


  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("Edit Task");

    try {
      await fetch('/api/todos/todo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: task.id, text: taskToEdit })
      })
      handleRefetch();

      console.log("Todo Edited")
    }catch (error) {
      console.error('Error editing todo')
    }

    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    console.log("Deleting task");

    try {
      await fetch('/api/todos/todo', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
      })
      handleRefetch();

      console.log("Todo deleted")
    }catch (error) {
      console.error('Error deleting todo')
    }
    setOpenModalDeleted(false);
    router.refresh();
  };


  return (
    <tr key={task.id} className={cn('overflow-hidden', className)}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-1'>
        <button
            className='btn btn-ghost !p-0 !px-4 text-blue-500'
            onClick={() => setOpenModalEdit(true)}
            >
        <FiEdit
          size={25}
        />
        </button>
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>Edit task</h3>
            <div className='modal-action'>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
              <button type='submit' className='btn'>
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <button
            className='text-red-500 btn btn-ghost !p-0 !px-4'
            onClick={() => setOpenModalDeleted(true)}
        >
          <FiTrash2
              size={25}
          />

        </button>
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-lg'>
            Are you sure, you want to delete this task?
          </h3>
          <div className='modal-action'>
            <button onClick={() => handleDeleteTask(task.id)} className='btn'>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
