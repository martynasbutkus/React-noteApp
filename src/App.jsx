import React, { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Note from './pages/Note';
import NoteButton from './pages/NoteButton';

function App() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    setBlocks([...blocks, {}]);
  };

  return (
    <>
      <GlobalStyle />
      <NoteButton addBlock={addBlock} />
      <Note blocks={blocks} addBlock={addBlock} />
    </>
  );
}

export default App;
