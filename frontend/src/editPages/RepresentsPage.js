import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function RepresentsPage() {
  const [symbolName, setSymbolName] = useState('');
  const [newCharacterName, setNewCharacterName] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleSymbolNameChange = (e) => setSymbolName(e.target.value);
  const handleNewCharacterNameChange = (e) => setNewCharacterName(e.target.value);

  const updateRepresentsEntry = async () => {
    if (!symbolName || !newCharacterName) {
      alert("Please fill in all fields.");
      return;
    }
    

    try {
      const response = await axios.put('http://localhost:3307/api/update/Tale', { oldPrimaryKey: symbolName, newCharacterName });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      setSymbolName('');
      setNewCharacterName('');
    } catch (error) {
      console.error('Error updating data:', error);
      setUpdateMessage("Error updating data. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Represents Entry</h2>
      <label>
        <span>Type in the name of Symbol you want to make changes in:</span>
        <input
          type="text"
          value={symbolName}
          onChange={handleSymbolNameChange}
        />
      </label>
      <label>
        <span>New Deity Name:</span>
        <input
          type="text"
          value={newCharacterName}
          onChange={handleNewCharacterNameChange}
        />
      </label>
      <button type="submit" onClick={updateRepresentsEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}




export default RepresentsPage;