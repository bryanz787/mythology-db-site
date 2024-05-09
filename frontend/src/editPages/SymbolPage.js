import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function SymbolPage() {
  const [symbolName, setSymbolName] = useState('');
  const [newOrigin, setNewOrigin] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleSymbolNameChange = (e) => setSymbolName(e.target.value);
  const handleNewOriginChange = (e) => setNewOrigin(e.target.value);

  const updateSymbolEntry = async () => {
    if (!symbolName || !newOrigin) {
      alert("Please fill in all fields.");
      return;
    }
    

    try {
      const response = await axios.put('http://localhost:3307/api/update/Pantheon', { oldPrimaryKey: symbolName, newOrigin });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      setSymbolName('');
      setNewOrigin('');
    } catch (error) {
      console.error('Error updating data:', error);
      setUpdateMessage("Error updating data. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Symbol Entry</h2>
      <label>
        <span>Type in the name of the Symbol you want to make changes in:</span>
        <input
          type="text"
          value={symbolName}
          onChange={handleSymbolNameChange}
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
      <button type="submit" onClick={updateSymbolEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}




export default SymbolPage;