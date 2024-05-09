import React, { useState } from 'react';
import axios from 'axios'; 

function ArtifactForm() {
  const [artifactName, setArtifactName] = useState('');
  const [origin, setOrigin] = useState('');

  const handleArtifactNameChange = (event) => {
    setArtifactName(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput(artifactName) || !isValidInput(origin)) {
      alert("Invalid input.");
      return;
    }

    const query = {
      artifactName,
      origin
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Artifact', query);
      console.log(response.data);
      // Reset the form after successful submission
      setArtifactName('');
      setOrigin('');
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="artifactName" className="text-left block">Artifact Name:</label>
          <br />
          <label htmlFor="origin" className="text-left block">Origin:</label>
        </div>
        <div>
          <input
            type="text"
            id="artifactName"
            value={artifactName}
            onChange={handleArtifactNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={handleOriginChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default ArtifactForm;
