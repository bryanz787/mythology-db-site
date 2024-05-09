import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; 

function BelongsToPage() {
  const [artifactName, setArtifactName] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleArtifactNameChange = (e) => setArtifactName(e.target.value);
  const handleCharacterNameChange = (e) => setCharacterName(e.target.value);

  const deleteBelongsToEntry = async () => {
    if (!artifactName || !characterName) {
      alert("Please enter all primary keys.");
      return;
    }

    try {
      const response = await axios.delete('http://localhost:3307/api/delete/BelongsTo', {
        data: { artifactName, characterName }
      });
      console.log(response.data);
      setDeleteMessage("The entry has been successfully deleted.");
      setArtifactName('');
      setCharacterName('');
    } catch (error) {
      console.error('Error deleting the entry:', error);
      setDeleteMessage("Error deleting the entry. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Delete BelongsTo Entry by typing its primary keys</h2>
      <label>
        <span>Artifact Name:</span>
        <input
          type="text"
          value={artifactName}
          onChange={handleArtifactNameChange}
        />
      </label>
      <label>
        <span>Character Name:</span>
        <input
          type="text"
          value={characterName}
          onChange={handleCharacterNameChange}
        />
      </label>
      <button type="button" className="delete-button" onClick={deleteBelongsToEntry}>Delete</button>
      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
  );
}

export default BelongsToPage;