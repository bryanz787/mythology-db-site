import React, { useState } from 'react';
import axios from 'axios';

function MortalForm() {
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [title, setTitle] = useState('');
  const [profession, setProfession] = useState('');
  
  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleCharacterDescriptionChange = (event) => {
    setCharacterDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput(characterName) || !isValidInput(characterDescription) 
    || !isValidInput(title) || !isValidInput(profession)) {
      alert("Invalid input.");
      return;
    }
    
    const query = {
      characterName,
      characterDescription,
      title,
      profession
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Mortal', query);
      console.log(response.data);
      // Reset the form after successful submission
      setCharacterName('');
      setCharacterDescription('');
      setTitle('');
      setProfession('');
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="characterName" className="text-left block">Character Name:</label>
          <br />
          <label htmlFor="characterDescription" className="text-left block">Character Description:</label>
          <br />
          <label htmlFor="title" className="text-left block">Title:</label>
          <br />
          <label htmlFor="profession" className="text-left block">Profession:</label>
        </div>
        <div>
          <input
            type="text"
            id="characterName"
            value={characterName}
            onChange={handleCharacterNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="characterDescription"
            value={characterDescription}
            onChange={handleCharacterDescriptionChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="profession"
            value={profession}
            onChange={handleProfessionChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default MortalForm;
