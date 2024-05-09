import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'; 

function LocationPage() {
  const [locationName, setLocationName] = useState('');
  const [areaDescription, setAreaDescription] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleLocationNameChange = (e) => setLocationName(e.target.value);
  const handleAreaDescriptionChange = (e) => setAreaDescription(e.target.value);

  const deleteLocationEntry = async () => {
    if (!locationName || !areaDescription) {
      alert("Please enter all primary keys.");
      return;
    }

    try {
      const response = await axios.delete('http://localhost:3307/api/delete/Location', {
        data: { locationName, areaDescription }
      });
      console.log(response.data);
      setDeleteMessage("The entry has been successfully deleted.");
      setLocationName('');
      setAreaDescription('');
    } catch (error) {
      console.error('Error deleting the entry:', error);
      setDeleteMessage("Error deleting the entry. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Delete Location Entry by typing its primary keys</h2>
      <label>
        <span>Location Name:</span>
        <input
          type="text"
          value={locationName}
          onChange={handleLocationNameChange}
        />
      </label>
      <label>
        <span>Area Description:</span>
        <input
          type="text"
          value={areaDescription}
          onChange={handleAreaDescriptionChange}
        />
      </label>
      <button type="button" className="delete-button" onClick={deleteLocationEntry}>Delete</button>
      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
  );
}

export default LocationPage;