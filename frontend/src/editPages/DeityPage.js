import React, { useState } from 'react';
import axios from 'axios';
import './Style.css'; 

function DeityPage() {
  const [characterName, setCharacterName] = useState('');
  const [newCharacterDescription, setNewCharacterDescription] = useState('');
  const [newDomain, setNewDomain] = useState('');
  const [newSupernaturalAbility, setNewSupernaturalAbility] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleCharacterNameChange = (e) => setCharacterName(e.target.value);
  const handleNewCharacterDescriptionChange = (e) => setNewCharacterDescription(e.target.value);
  const handleNewDomainChange = (e) => setNewDomain(e.target.value);
  const handleNewSupernaturalAbilityChange = (e) => setNewSupernaturalAbility(e.target.value);

  const updateDeityEntry = async () => {
    if (!characterName) {
      alert("Please enter the deity's name.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/Deity', {
        characterName,
        newCharacterDescription,
        newDomain,
        newSupernaturalAbility
      });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
    } catch (error) {
      console.error('Error updating deity:', error);
      setUpdateMessage("Error updating deity. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Deity Entry</h2>
      <label>
        <span>Type in the name of the Deity you would like to edit:</span>
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
        <span>New Domain:</span>
        <input
          type="text"
          value={newDomain}
          onChange={handleNewDomainChange}
        />
      </label>
      <label>
        <span>New Supernatural Ability:</span>
        <input
          type="text"
          value={newSupernaturalAbility}
          onChange={handleNewSupernaturalAbilityChange}
        />
      </label>
      <button type="button" onClick={updateDeityEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default DeityPage;