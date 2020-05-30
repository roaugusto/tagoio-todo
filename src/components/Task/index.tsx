import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import {
  TaskContainerStyled,
  TaskDescriptionStyled,
  CheckStyled,
  TaskLineStyled,
  ButtonTrashStyled,
  InputStyled,
} from './styles';

interface TaskModel {
  uid: number;
  description: string;
  done: boolean;
}

interface TaskProps {
  task: TaskModel;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newDescription: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDone, onDelete, onEdit }) => {
  const [isChecked, setCheck] = useState(task.done);
  const [taskDescription, setTaskDescription] = useState(task.description);

  function handleCheck(): void {
    setCheck(!isChecked);
    onDone(task.uid);
  }

  function handleDelete(): void {
    onDelete(task.uid);
  }

  function handleEdit(): void {
    if (task.description !== taskDescription) {
      onEdit(task.uid, taskDescription);
    }
  }

  return (
    <TaskContainerStyled>
      <TaskLineStyled>
        <CheckStyled
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={isChecked}
          onChange={handleCheck}
        />
        <TaskDescriptionStyled done={isChecked}>
          <InputStyled
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            onBlur={handleEdit}
            done={isChecked}
          />
        </TaskDescriptionStyled>
      </TaskLineStyled>

      <ButtonTrashStyled onClick={handleDelete}>
        <FaTrash color="#fff" size={14} />
      </ButtonTrashStyled>
    </TaskContainerStyled>
  );
};

export default Task;
