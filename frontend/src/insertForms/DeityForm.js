import React, { useState } from 'react';
import axios from 'axios';

function DeityForm() {
  const [deityName, setDeityName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [domain, setDomain] = useState('');
  const [supernaturalAbility, setSupernaturalAbility] = useState('');
  const [culture, setCulture] = useState('');

  const handleDeityNameChange = (event) => {
    setDeityName(event.target.value);
  };

  const handleCharacterDescriptionChange = (event) => {
    setCharacterDescription(event.target.value);
  };

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleSupernaturalAbilityChange = (event) => {
    setSupernaturalAbility(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!isValidInput(deityName) || !isValidInput(characterDescription) 
    || !isValidInput(supernaturalAbility) || !isValidInput(domain) || !isValidInput(culture)) {
      alert("Invalid input.");
      return;
    }

    const query = {
      deityName,
      characterDescription,
      domain,
      supernaturalAbility
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Deity', query);
      console.log(response.data);
      // Reset the form after successful submission
      setDeityName('');
      setCharacterDescription('');
      setDomain('');
      setSupernaturalAbility('');
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="deityName" className="text-left block">Deity Name:</label>
          <br />
          <label htmlFor="characterDescription" className="text-left block">Character Description:</label>
          <br />
          <label htmlFor="domain" className="text-left block">Domain:</label>
          <br />
          <label htmlFor="supernaturalAbility" className="text-left block">Supernatural Ability:</label>
          <br />
          <label htmlFor="culture" className="text-left block">Culture:</label>
        </div>
        <div>
          <input
            type="text"
            id="deityName"
            value={deityName}
            onChange={handleDeityNameChange}
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
            id="domain"
            value={domain}
            onChange={handleDomainChange}
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
            id="culture"
            value={culture}
            onChange={handleCultureChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default DeityForm;
