import React, { useState } from 'react';
import axios from 'axios'; 

function PartOfForm() {
  const [characterName, setCharacterName] = useState('');
  const [taleName, setTaleName] = useState('');

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleTaleNameChange = (event) => {
    setTaleName(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput(characterName) || !isValidInput(taleName)) {
      alert("Invalid input.");
      return;
    }
    
    const query = {
      characterName,
      taleName
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/PartOf', query);
      console.log(response.data);
      // Reset the form after successful submission
      setCharacterName('');
      setTaleName('');
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
          <label htmlFor="taleName" className="text-left block">Tale Name:</label>
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
            id="taleName"
            value={taleName}
            onChange={handleTaleNameChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default PartOfForm;
