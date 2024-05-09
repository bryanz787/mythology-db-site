import React, { useState } from 'react';
import axios from 'axios'; 

function PantheonForm() {
  const [culture, setCulture] = useState('');
  const [pantheonName, setPantheonName] = useState('');

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const handlePantheonNameChange = (event) => {
    setPantheonName(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {


    event.preventDefault();

    if (!isValidInput(culture) || !isValidInput(pantheonName)) {
      alert("Invalid input.");
      return;
    }
    
    const query = {
      culture,
      pantheonName
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Pantheon', query);
      console.log(response.data);
      // Reset the form after successful submission
      setCulture('');
      setPantheonName('');
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="culture" className="text-left block">Culture:</label>
          <br />
          <label htmlFor="pantheonName" className="text-left block">Pantheon Name:</label>
        </div>
        <div>
          <input
            type="text"
            id="culture"
            value={culture}
            onChange={handleCultureChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="pantheonName"
            value={pantheonName}
            onChange={handlePantheonNameChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default PantheonForm;
