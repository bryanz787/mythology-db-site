import React, { useState } from 'react';
import axios from 'axios';

function CreatureForm() {
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [supernaturalAbility, setSupernaturalAbility] = useState('');
  const [species, setSpecies] = useState('');

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleCharacterDescriptionChange = (event) => {
    setCharacterDescription(event.target.value);
  };

  const handleSupernaturalAbilityChange = (event) => {
    setSupernaturalAbility(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput(characterName) || !isValidInput(characterDescription) 
    || !isValidInput(supernaturalAbility) || !isValidInput(species)) {
      alert("Invalid input.");
      return;
    }

    const query = {
      characterName,
      characterDescription,
      supernaturalAbility,
      species
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Creature', query);
      console.log(response.data);
      // Reset the form after successful submission
      setCharacterName('');
      setCharacterDescription('');
      setSupernaturalAbility('');
      setSpecies('');
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
          <label htmlFor="supernaturalAbility" className="text-left block">Supernatural Ability:</label>
          <br />
          <label htmlFor="species" className="text-left block">Species:</label>
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
            id="supernaturalAbility"
            value={supernaturalAbility}
            onChange={handleSupernaturalAbilityChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="species"
            value={species}
            onChange={handleSpeciesChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default CreatureForm;
