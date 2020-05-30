import styled from 'styled-components';

interface TaskDescriptionProps {
  done: boolean;
}

export const TaskDescriptionStyled = styled.div<TaskDescriptionProps>`
  padding-top: 14px;
  color: ${({ done }): string => (done ? '#697882' : '#000')};
  text-decoration: ${({ done }): string => (done ? 'line-through' : 'none')};
`;

export const TaskContainerStyled = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  border-radius: 5px;

  list-style-type: none;
  border: 1px solid #e0e8f5;
  background: #e0e8f5;
  justify-content: space-between;
`;

export const CheckStyled = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: block;
  width: 25px;
  height: 25px;
  padding: 6px;

  border-radius: 6px;
  background-color: #fff;
  margin: 10px;
  user-select: none;

  &:checked {
    background-color: #cfd9e9;
  }

  &:checked::after {
    content: '✔';
    position: relative;
    top: -2px;
  }
`;

export const TaskLineStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonTrashStyled = styled.button`
  background: #ee6368;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 5px;
  outline: none !important;
`;

export const InputStyled = styled.input<TaskDescriptionProps>`
  background: transparent;
  /* border-color: #fff; */
  border: 0;

  color: ${({ done }): string => (done ? '#697882' : '#000')};
  text-decoration: ${({ done }): string => (done ? 'line-through' : 'none')};
`;
