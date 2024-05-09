import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function PantheonPage() {
  const [culture, setCulture] = useState('');
  const [newPantheonName, setNewPantheonName] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleCultureChange = (e) => setCulture(e.target.value);
  const handleNewPantheonNameChange = (e) => setNewPantheonName(e.target.value);

  const updatePantheonEntry = async () => {
    if (!culture || !newPantheonName) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/Pantheon', { oldPrimaryKey: culture, newPantheonName });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      setCulture('');
      setNewPantheonName('');
    } catch (error) {
      console.error('Error updating data:', error);
      setUpdateMessage("Error updating data. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Pantheon Entry</h2>
      <label>
        <span>Type in the Culture of the entry you want to make changes in:</span>
        <input
          type="text"
          value={culture}
          onChange={handleCultureChange}
        />
      </label>
      <label>
        <span>New Pantheon Name:</span>
        <input
          type="text"
          value={newPantheonName}
          onChange={handleNewPantheonNameChange}
        />
      </label>
      <button type="submit" onClick={updatePantheonEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}




export default PantheonPage;