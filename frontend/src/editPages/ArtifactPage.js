import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function ArtifactPage() {
  const [artifactName, setArtifactName] = useState('');
  const [newOrigin, setNewOrigin] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleArtifactNameChange = (e) => setArtifactName(e.target.value);
  const handleNewOriginChange = (e) => setNewOrigin(e.target.value);

  const updateArtifactEntry = async () => {
    if (!artifactName || !newOrigin) {
      alert("Please fill in all fields.");
      return;
    }
    

    try {
      const response = await axios.put('http://localhost:3307/api/update/Pantheon', { oldPrimaryKey: artifactName, newOrigin });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      setArtifactName('');
      setNewOrigin('');
    } catch (error) {
      console.error('Error updating data:', error);
      setUpdateMessage("Error updating data. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Artifact Entry</h2>
      <label>
        <span>Type in the name of Artifact you want to make changes in:</span>
        <input
          type="text"
          value={artifactName}
          onChange={handleArtifactNameChange}
        />
      </label>
      <label>
        <span>New Origin:</span>
        <input
          type="text"
          value={newOrigin}
          onChange={handleNewOriginChange}
        />
      </label>
      <button type="submit" onClick={updateArtifactEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}




export default ArtifactPage;