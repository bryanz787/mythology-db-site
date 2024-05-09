import React, {useState, useEffect} from 'react'
import axios from 'axios'; 
import './TableStyleForSort.css'; 

const mockData = [
    { Culture: 'Norse', PantheonName: 'Asgardian Gods' },
    { Culture: 'Greek', PantheonName: 'Gods of Olympus' }, 
    { Culture: 'Egyptian', PantheonName: 'Egyptian Gods and Goddesses' },
    { Culture: 'Chinese', PantheonName: 'Chinese Mythology' },
    { Culture: 'Hindu', PantheonName: 'Hindu Mythology' },
    { Culture: 'Welsh', PantheonName: 'Arthurian Legends' },
    { Culture: 'Celtic', PantheonName: 'Deities and Spirits of Celtic Mythology' },
    { Culture: 'Mesopotamian', PantheonName: 'Gods and Mythical Creatures of Mesopotamia' },
    { Culture: 'Native American', PantheonName: 'Native American Mythology' }
  ];

  function PantheonSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Pantheons you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Culture</th>
            <th>Pantheon</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.Culture}</td>
              <td>{item.PantheonName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}
  
  export default PantheonSort;