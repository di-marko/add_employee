import React from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData, removeCharacter }) => {
  const rows = characterData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

const Table = ({ characterData, removeCharacter }) => (
  <table>
    <TableHeader />
    <TableBody characterData={characterData} removeCharacter={removeCharacter} />
  </table>
);

export default Table;
