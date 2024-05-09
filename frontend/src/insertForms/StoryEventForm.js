import React, { useState } from 'react';
import axios from 'axios'; 

function StoryEventForm() {
  const [taleName, setTaleName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [locationName, setLocationName] = useState('');
  const [timePeriod, setTimePeriod] = useState('anytime');

  const handleTaleNameChange = (event) => {
    setTaleName(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidInput(taleName) || !isValidInput(eventName) 
    || !isValidInput(eventDescription) || !isValidInput(timePeriod) || !isValidInput(locationName)) {
      alert("Invalid input.");
      return;
    }

    const query = {
      taleName,
      eventName,
      eventDescription,
      locationName,
      timePeriod
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/StoryEvent', query);
      console.log(response.data);
      // Reset the form after successful submission
      setTaleName('');
      setEventName('');
      setEventDescription('');
      setLocationName('');
      setTimePeriod('');
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="taleName" className="text-left block">Tale Name:</label>
          <br />
          <label htmlFor="eventName" className="text-left block">Event Name:</label>
          <br />
          <label htmlFor="eventDescription" className="text-left block">Event Description:</label>
          <br />
          <label htmlFor="locationName" className="text-left block">Location Name:</label>
          <br />
          <label htmlFor="timePeriod" className="text-left block">Time Period:</label>
        </div>
        <div>
          <input
            type="text"
            id="taleName"
            value={taleName}
            onChange={handleTaleNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={handleEventNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="eventDescription"
            value={eventDescription}
            onChange={handleEventDescriptionChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={handleLocationNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="timePeriod"
            value={timePeriod}
            onChange={handleTimePeriodChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default StoryEventForm;
