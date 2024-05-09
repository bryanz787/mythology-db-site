import React, { useState, useEffect } from 'react'
import './TableStyleForSort.css';

function LocationSort({ keyword, table }) {
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('/api/project/Location')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  useEffect(() => {
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(keyword.toLowerCase())
      )
    );
    setFilteredData(filteredData);
  }, [data, keyword]);


  if (filteredData.length === 0) {
    return <div>sorry, the given keyword was not found in the Table of Locations you selected</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Description</th>
          <th>Time Period</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{item.LocationName}</td>
            <td>{item.AreaDescription}</td>
            <td>{item.TimePeriod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}



export default LocationSort;
