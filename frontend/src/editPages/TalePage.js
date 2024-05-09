import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function TalePage() {
  const [taleName, setTaleName] = useState('');
  const [newMoralLesson, setNewMoralLesson] = useState('');
  const [newCulture, setNewCulture] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleTaleNameChange = (e) => setTaleName(e.target.value);
  const handleNewMoralLessonChange = (e) => setNewMoralLesson(e.target.value);
  const handleNewCultureChange = (e) => setNewCulture(e.target.value);

  const updateTaleEntry = async () => {
    if (!taleName) {
      alert("Please enter the name of the tale.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3307/api/update/Tale', {
        taleName,
        newMoralLesson,
        newCulture
      });
      console.log(response.data);
      setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
      // Optionally reset the form fields here if desired
    } catch (error) {
      console.error('Error updating Tale entry:', error);
      setUpdateMessage("Error updating Tale entry. Please try again.");
    }
  };

  return (
    <div className="edit-form">
      <h2 className="form-title">Edit Tale Entry</h2>
      <label>
        <span>Type in the name of the Tale you'd like to edit:</span>
        <input
          type="text"
          value={taleName}
          onChange={handleTaleNameChange}
        />
      </label>
      <label>
        <span>New Moral Lesson:</span>
        <input
          type="text"
          value={newMoralLesson}
          onChange={handleNewMoralLessonChange}
        />
      </label>
      <label>
        <span>New Culture:</span>
        <input
          type="text"
          value={newCulture}
          onChange={handleNewCultureChange}
        />
      </label>
      <button type="button" onClick={updateTaleEntry}>Update</button>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default TalePage;