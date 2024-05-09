import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function StoryEventPage() {
  const [taleName, setTaleName] = useState('');
  const [eventName, setEventName] = useState(''); // Since EventName is part of the primary key, we need it for identification
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newLocationName, setNewLocationName] = useState('');
  const [newTimePeriod, setNewTimePeriod] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleTaleNameChange = (e) => setTaleName(e.target.value);
  const handleEventNameChange = (e) => setEventName(e.target.value);
  const handleNewEventDescriptionChange = (e) => setNewEventDescription(e.target.value);
  const handleNewLocationNameChange = (e) => setNewLocationName(e.target.value);
  const handleNewTimePeriodChange = (e) => setNewTimePeriod(e.target.value);

  const updateStoryEventEntry = async () => {
    if (!taleName || !eventName) {
      alert("Please enter the tale and event names.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/StoryEvent', {
        taleName,
        eventName,
        newEventDescription,
        newLocationName,
        newTimePeriod
      });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      // Optionally reset the form fields here if desired
    } catch (error) {
      console.error('Error updating story event:', error);
      setUpdateMessage("Error updating story event. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Story Event Entry</h2>
      <label>
        <span>Type in the name of the Tale containing the Story Event you'd like to edit:</span>
        <input
          type="text"
          value={taleName}
          onChange={handleTaleNameChange}
        />
      </label>
      <label>
        <span>Type in the name of the Story Event you'd ike to edit:</span>
        <input
          type="text"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </label>
      <label>
        <span>New Event Description:</span>
        <input
          type="text"
          value={newEventDescription}
          onChange={handleNewEventDescriptionChange}
        />
      </label>
      <label>
        <span>New Location Name:</span>
        <input
          type="text"
          value={newLocationName}
          onChange={handleNewLocationNameChange}
        />
      </label>
      <label>
        <span>New Time Period:</span>
        <input
          type="text"
          value={newTimePeriod}
          onChange={handleNewTimePeriodChange}
        />
      </label>
      <button type="button" onClick={updateStoryEventEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default StoryEventPage;