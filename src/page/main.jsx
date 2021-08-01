import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  hieght: 40px;
  background-color: red;
`;

const main = () => {
  return (
    <div>
      <div>TodoList</div>
      <Button>안뇽</Button>
      <Button>안뇽</Button>
      <Button>안뇽</Button>
    </div>
  );
};

export default main;
