import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function PartOfPage() {
  const [characterName, setCharacterName] = useState('');
  const [newTaleName, setNewTaleName] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleCharacterNameChange = (e) => setCharacterName(e.target.value);
  const handleNewTaleNameChange = (e) => setNewTaleName(e.target.value);

  const updateCharacterEntry = async () => {
    if (!characterName || !newTaleName) {
      alert("Please fill in all fields.");
      return;
    }
    

    try {
      const response = await axios.put('http://localhost:3307/api/update/Tale', { oldPrimaryKey: characterName, newTaleName });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      setCharacterName('');
      setNewTaleName('');
    } catch (error) {
      console.error('Error updating data:', error);
      setUpdateMessage("Error updating data. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit PartOf Entry</h2>
      <label>
        <span>Type in the name of Character you want to make changes in:</span>
        <input
          type="text"
          value={characterName}
          onChange={handleCharacterNameChange}
        />
      </label>
      <label>
        <span>New Tale Name:</span>
        <input
          type="text"
          value={newTaleName}
          onChange={handleNewTaleNameChange}
        />
      </label>
      <button type="submit" onClick={updateCharacterEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}




export default PartOfPage;