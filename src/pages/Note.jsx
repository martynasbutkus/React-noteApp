import React, { useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import styled from 'styled-components';

const Note = ({ blocks, addBlock }) => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 30px;
    width: 90%;
    margin: 0 auto;
    height: 400px;
  `;

  const Block = styled.div`
    display: block;
    width: 300px;
  `;

  const Panel = styled.div`
    display: flex;
    background: #9ec862;
    color: white;
    width: 100%;
    padding: 10px;
    justify-content: flex-end;
    gap: 10px;
    font-size: 20px;
  `;

  const Text = styled.div`
    display: flex;
    background: white;
    color: black;
    padding: 10px;
  `;

  return (
    <Container>
      {blocks.map((block, index) => (
        <Block key={index}>
          <Panel>
            <button><BiSolidEditAlt /></button>
            <button><FiTrash2 /></button>
          </Panel>
          <Text>
          </Text>
        </Block>
      ))}
    </Container>
  );
};

export default Note;
