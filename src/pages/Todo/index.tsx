import React, { useState, FormEvent } from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  ContainerTodoStyled,
  FormSearchStyled,
  SubmitButtonStyled,
  TitleStyled,
  TaskListContainerStyled,
  MessageStyled,
} from './styles';
import assets from './assets';

import Task from '../../components/Task';

interface TaskModel {
  uid: number;
  description: string;
  done: boolean;
}

const Dashboard: React.FC = () => {
  const localTasksToDo = localStorage.getItem('@tagoio/tasks-todo');
  const localTasksCompleted = localStorage.getItem('@tagoio/tasks-completed');

  let listTasksLocal: TaskModel[] = [];
  let listTasksCompletedLocal: TaskModel[] = [];

  if (localTasksToDo) {
    listTasksLocal = JSON.parse(localTasksToDo);
  }

  if (localTasksCompleted) {
    listTasksCompletedLocal = JSON.parse(localTasksCompleted);
  }

  const [taskDescription, setTaskDescription] = useState('');
  const [taskToDoList, setTaskToDoList] = useState(listTasksLocal);
  const [taskCompletedList, setTaskCompletedList] = useState(
    listTasksCompletedLocal,
  );

  function handleFilterSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const listTasks: TaskModel[] = taskToDoList;
    const newTask = {
      uid: Date.now(),
      description: taskDescription,
      done: false,
    };
    listTasks.push(newTask);
    setTaskToDoList(listTasks);
    setTaskDescription('');

    localStorage.setItem('@tagoio/tasks-todo', JSON.stringify(listTasks));
  }

  function handleClickDone(uid: number): void {
    const newTaskList = [...taskToDoList];
    const taskIndex = newTaskList.findIndex((item) => item.uid === uid);
    const task = newTaskList.find((item) => item.uid === uid)!;
    task.done = true;

    newTaskList.splice(taskIndex, 1);

    const completedList = [...taskCompletedList];
    completedList.push(task);

    setTaskToDoList(newTaskList);
    setTaskCompletedList(completedList);
    localStorage.setItem('@tagoio/tasks-todo', JSON.stringify(newTaskList));
    localStorage.setItem(
      '@tagoio/tasks-completed',
      JSON.stringify(completedList),
    );
  }

  function handleClickToDo(uid: number): void {
    const newTaskList = [...taskCompletedList];
    const taskIndex = newTaskList.findIndex((item) => item.uid === uid);
    const task = newTaskList.find((item) => item.uid === uid)!;
    task.done = false;

    newTaskList.splice(taskIndex, 1);

    const toDoList = [...taskToDoList];
    toDoList.push(task);

    toDoList.sort((a, b) => (a.uid > b.uid ? 1 : -1));

    setTaskToDoList(toDoList);
    setTaskCompletedList(newTaskList);

    localStorage.setItem('@tagoio/tasks-todo', JSON.stringify(toDoList));
    localStorage.setItem(
      '@tagoio/tasks-completed',
      JSON.stringify(newTaskList),
    );
  }

  function handleDeleteToDoList(uid: number): void {
    const newTaskList = [...taskToDoList];
    const taskIndex = newTaskList.findIndex((item) => item.uid === uid);
    newTaskList.splice(taskIndex, 1);
    setTaskToDoList(newTaskList);

    localStorage.setItem('@tagoio/tasks-todo', JSON.stringify(newTaskList));
  }

  function handleDeleteCompletedList(uid: number): void {
    const newTaskList = [...taskCompletedList];
    const taskIndex = newTaskList.findIndex((item) => item.uid === uid);
    newTaskList.splice(taskIndex, 1);
    setTaskCompletedList(newTaskList);
    localStorage.setItem(
      '@tagoio/tasks-completed',
      JSON.stringify(newTaskList),
    );
  }

  function handleEditToDo(uid: number, description: string): void {
    const newTaskList = [...taskToDoList];
    const taskIndex = newTaskList.findIndex((item) => item.uid === uid);
    const task = newTaskList.find((item) => item.uid === uid)!;

    task.description = description;
    newTaskList.splice(taskIndex, 1, task);

    setTaskToDoList(newTaskList);
    localStorage.setItem('@tagoio/tasks-todo', JSON.stringify(newTaskList));
  }

  function handleEditCompleted(uid: number, description: string): void {
    const newTaskList = [...taskCompletedList];
    const taskIndex = newTaskList.findIndex((item) => item.uid === uid);
    const task = newTaskList.find((item) => item.uid === uid)!;

    task.description = description;
    newTaskList.splice(taskIndex, 1, task);

    setTaskCompletedList(newTaskList);
    localStorage.setItem(
      '@tagoio/tasks-completed',
      JSON.stringify(newTaskList),
    );
  }

  return (
    <ContainerTodoStyled>
      <TitleStyled>
        <img src={assets.imgLogo} width={80} alt="Logo" />
        Todo
      </TitleStyled>

      <FormSearchStyled onSubmit={handleFilterSubmit}>
        <div>
          <input
            type="text"
            placeholder="Add task"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />

          <SubmitButtonStyled>
            <FaPlus color="#fff" size={16} />
          </SubmitButtonStyled>
        </div>
      </FormSearchStyled>

      <TaskListContainerStyled>
        <h1>Tasks To Do</h1>

        {taskToDoList.map((item) => (
          <Task
            key={item.uid}
            task={item}
            onDone={handleClickDone}
            onDelete={handleDeleteToDoList}
            onEdit={handleEditToDo}
          />
        ))}

        {taskToDoList.length === 0 && (
          <MessageStyled>Awesome! You completed all tasks! </MessageStyled>
        )}
      </TaskListContainerStyled>

      {taskCompletedList.length > 0 && (
        <TaskListContainerStyled>
          <h1>Completed Tasks</h1>

          {taskCompletedList.map((item) => (
            <Task
              key={item.uid}
              task={item}
              onDone={handleClickToDo}
              onDelete={handleDeleteCompletedList}
              onEdit={handleEditCompleted}
            />
          ))}
        </TaskListContainerStyled>
      )}
    </ContainerTodoStyled>
  );
};

export default Dashboard;
