import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function MortalPage() {
  const [characterName, setCharacterName] = useState('');
  const [newCharacterDescription, setNewCharacterDescription] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newProfession, setNewProfession] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleCharacterNameChange = (e) => setCharacterName(e.target.value);
  const handleNewCharacterDescriptionChange = (e) => setNewCharacterDescription(e.target.value);
  const handleNewTitleChange = (e) => setNewTitle(e.target.value);
  const handleNewProfessionChange = (e) => setNewProfession(e.target.value);

  const updateMortalEntry = async () => {
    if (!characterName) {
      alert("Please enter the character's name.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/Mortal', {
        characterName,
        newCharacterDescription,
        newTitle,
        newProfession
      });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      // Optionally reset the form fields here if desired
    } catch (error) {
      console.error('Error updating Mortal entry:', error);
      setUpdateMessage("Error updating Mortal entry. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Mortal Entry</h2>
      <label>
        <span>Type in the name of the Mortal you'd like to edit:</span>
        <input
          type="text"
          value={characterName}
          onChange={handleCharacterNameChange}
        />
      </label>
      <label>
        <span>New Character Description:</span>
        <input
          type="text"
          value={newCharacterDescription}
          onChange={handleNewCharacterDescriptionChange}
        />
      </label>
      <label>
        <span>New Title:</span>
        <input
          type="text"
          value={newTitle}
          onChange={handleNewTitleChange}
        />
      </label>
      <label>
        <span>New Profession:</span>
        <input
          type="text"
          value={newProfession}
          onChange={handleNewProfessionChange}
        />
      </label>
      <button type="button" onClick={updateMortalEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default MortalPage;