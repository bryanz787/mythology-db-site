import React, { useState } from 'react';
import axios from 'axios';
import './Style.css'; 

function LocationPage() {
  const [locationName, setLocationName] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [newAreaDescription, setNewAreaDescription] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleLocationNameChange = (e) => setLocationName(e.target.value);
  const handleTimePeriodChange = (e) => setTimePeriod(e.target.value);
  const handleNewAreaDescriptionChange = (e) => setNewAreaDescription(e.target.value);

  const updateLocationEntry = async () => {
    if (!locationName || !timePeriod) {
      alert("Please enter the location's name and time period.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/Location', {
        locationName,
        timePeriod,
        newAreaDescription
      });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
    } catch (error) {
      console.error('Error updating location:', error);
      setUpdateMessage("Error updating location. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Location Entry</h2>
      <label>
        <span>Type in the name of the location you'd like to edit:</span>
        <input
          type="text"
          value={locationName}
          onChange={handleLocationNameChange}
        />
      </label>
      <label>
        <span>Type in the Time Period of the location you'd like to edit:</span>
        <input
          type="text"
          value={timePeriod}
          onChange={handleTimePeriodChange}
        />
      </label>
      <label>
        <span>New Area Description:</span>
        <input
          type="text"
          value={newAreaDescription}
          onChange={handleNewAreaDescriptionChange}
        />
      </label>
      <button type="button" onClick={updateLocationEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default LocationPage;