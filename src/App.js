import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const removeCharacter = (index) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  const handleSubmit = (character) => {
    setCharacters([...characters, character]);
  };

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
