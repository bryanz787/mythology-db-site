import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function RitualPage() {
  const [ritualName, setRitualName] = useState('');
  const [recurring, setRecurring] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [location, setLocation] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleRitualNameChange = (e) => setRitualName(e.target.value);
  const handleRecurringChange = (e) => setRecurring(e.target.value);
  const handleCharacterNameChange = (e) => setCharacterName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleTimePeriodChange = (e) => setTimePeriod(e.target.value);

  const updateRitualEntry = async () => {
    if (!ritualName) {
      alert("Please enter the ritual's name.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/Ritual', {
        ritualName,
        recurring,
        characterName,
        location,
        timePeriod
      });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      // Optionally reset the form fields here if desired
    } catch (error) {
      console.error('Error updating Ritual:', error);
      setUpdateMessage("Error updating Ritual. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Ritual Entry</h2>
      <label>
        <span>Type in the name of the Ritual you'd like to make changes in:</span>
        <input
          type="text"
          value={ritualName}
          onChange={handleRitualNameChange}
        />
      </label>
      <label>
        <span>New Recurring (True/False):</span>
        <select value={recurring} onChange={handleRecurringChange}>
          <option value="">Select Option</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </label>
      <label>
        <span>New Character Name:</span>
        <input
          type="text"
          value={characterName}
          onChange={handleCharacterNameChange}
        />
      </label>
      <label>
        <span>New Location:</span>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
        />
      </label>
      <label>
        <span>New Time Period:</span>
        <input
          type="text"
          value={timePeriod}
          onChange={handleTimePeriodChange}
        />
      </label>
      <button type="button" onClick={updateRitualEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default RitualPage;