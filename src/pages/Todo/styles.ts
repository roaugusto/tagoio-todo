import styled from 'styled-components';

export const ContainerTodoStyled = styled.div`
  max-width: 800px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto 20px auto;

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const TitleStyled = styled.h1`
  color: #337ab7;
  font-size: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: italic;

  img {
    margin-top: 15px;
  }
`;

export const FormSearchStyled = styled.form`
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: row;

    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 5px;
      border-radius: 4px;
      /* font-size: 12px; */
    }
  }
`;

export const SubmitButtonStyled = styled.button.attrs({
  type: 'submit',
})`
  background: #4bde95;
  border: 0;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  outline: none !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaskListContainerStyled = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;

  h1 {
    color: #337ab7;
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const MessageStyled = styled.div`
  text-align: center;
  color: #697882;
`;
