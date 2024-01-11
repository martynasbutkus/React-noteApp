import React from 'react';
import styled from 'styled-components';

const NoteButton = ({ addBlock }) => {
  const NavBar = styled.nav`
    display: flex;
    height: 40px;
    margin: 20px;
  `;

  const Button = styled.button`
    background: #9ec862;
    color: white;
    border: none;
    height: 30px;
    padding: 0px 10px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
  `;

  return (
    <NavBar>
      <Button onClick={addBlock}>+Add note</Button>
    </NavBar>
  );
};

export default NoteButton;
