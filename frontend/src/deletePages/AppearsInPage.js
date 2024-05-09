import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; 

function AppearsInPage() {
  const [artifactName, setArtifactName] = useState('');
  const [taleName, settaleName] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleArtifactNameChange = (e) => setArtifactName(e.target.value);
  const handletaleNameChange = (e) => settaleName(e.target.value);

  const deleteAppearsInEntry = async () => {
    if (!artifactName || !taleName) {
      alert("Please enter all primary keys.");
      return;
    }

    try {
      const response = await axios.delete('http://localhost:3307/api/delete/AppearsIn', {
        data: { artifactName, taleName }
      });
      console.log(response.data);
      setDeleteMessage("The entry has been successfully deleted.");
      setArtifactName('');
      settaleName('');
    } catch (error) {
      console.error('Error deleting the entry:', error);
      setDeleteMessage("Error deleting the entry. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Delete AppearsIn Entry by typing its primary keys</h2>
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
          value={taleName}
          onChange={handletaleNameChange}
        />
      </label>
      <button type="button" className="delete-button" onClick={deleteAppearsInEntry}>Delete</button>
      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
  );
}

export default AppearsInPage;