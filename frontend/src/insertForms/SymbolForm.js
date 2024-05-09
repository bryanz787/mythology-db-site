import React, { useState } from 'react';
import axios from 'axios'; 

function SymbolForm() {
  const [symbolName, setSymbolName] = useState('');
  const [origin, setOrigin] = useState('');

  const handleSymbolNameChange = (event) => {
    setSymbolName(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidInput(symbolName) || !isValidInput(origin)) {
      alert("Invalid input.");
      return;
    }

    const query = {
      symbolName,
      origin
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Symbol', query);
      console.log(response.data);
      // Reset the form after successful submission
      setSymbolName('');
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
          <label htmlFor="symbolName" className="text-left block">Symbol Name:</label>
          <br />
          <label htmlFor="origin" className="text-left block">Origin:</label>
        </div>
        <div>
          <input
            type="text"
            id="symbolName"
            value={symbolName}
            onChange={handleSymbolNameChange}
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

export default SymbolForm;
