import React, { useState } from 'react';
import axios from 'axios'; 

function TaleForm() {
  const [taleName, setTaleName] = useState('');
  const [moralLesson, setMoralLesson] = useState('inconclusive');
  const [culture, setCulture] = useState('');

  const handleTaleNameChange = (event) => {
    setTaleName(event.target.value);
  };

  const handleMoralLessonChange = (event) => {
    setMoralLesson(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidInput(taleName) || !isValidInput(moralLesson) || !isValidInput(culture))  {
      alert("Invalid input.");
      return;
    }

    const query = {
      taleName,
      moralLesson,
      culture
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/Tale', query);
      console.log(response.data);
      // Reset the form after successful submission
      setTaleName('');
      setMoralLesson('');
      setCulture('');
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
          <label htmlFor="moralLesson" className="text-left block">Moral Lesson:</label>
          <br />
          <label htmlFor="culture" className="text-left block">Culture:</label>
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
            id="moralLesson"
            value={moralLesson}
            onChange={handleMoralLessonChange}
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

export default TaleForm;
