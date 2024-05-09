import React, { useState } from 'react'
import './TableStyleForSort.css';
import axios from 'axios';

const mockData = [
    { TaleName: 'Tale of Arachne', MoralLesson: 'Do not get carried away in your own hubris', Culture: 'Greek' },
    { TaleName: 'Story of Achilles', MoralLesson: 'Everyone has a weakness', Culture: 'Greek' },
    { TaleName: 'The myth of Tantalus', MoralLesson: 'Selfish actions could have enduring consequences that may be unpredictable at the time', Culture: 'Greek' },
    { TaleName: 'Tale of Narcissus', MoralLesson: 'Pride and vanity are dangerous', Culture: 'Greek' },
    { TaleName: 'The Myth of Daedalus and Icarus', MoralLesson: 'Do not get carried away in your own hubris', Culture: 'Greek' },
    { TaleName: 'Story of Orpheus and Eurydice', MoralLesson: 'Be patient and keep one"s faith', Culture: 'Greek' },
    { TaleName: 'Myth of Niobe', MoralLesson: 'Do not get carried away in your own hubris', Culture: 'Greek' },
    { TaleName: 'The Death and Resurrection of Osiris', MoralLesson: 'Pride and vanity are dangerous', Culture: 'Egyptian' },
    { TaleName: 'Sun Wukong"s Quest for Immortality', MoralLesson: 'Boldness and talent can only carry one so far. To achieve goals, it takes hubris, persistence and a lot of teammates', Culture: 'Chinese' },
    { TaleName: 'The Legend of King Arthur', MoralLesson: 'Leadership and valor in the pursuit of justice and peace define true kingship.', Culture: 'Welsh' },
    { TaleName: 'Tale of Dagda and the Cauldron', MoralLesson: 'Do not underestimate the consequences of greed and betrayal', Culture: 'Celtic' },
    { TaleName: 'Tale of Enlil and the Tablets of Destiny', MoralLesson: 'Power and destiny should not be taken for granted', Culture: 'Mesopotamian' },
    { TaleName: 'Tale of Trickster Coyote', MoralLesson: 'Wisdom can be found in unexpected places', Culture: 'Native American' },
    { TaleName: 'The Gorgon Medusa', MoralLesson: 'Even the most dreadful form can house a gentle soul, and the most beautiful can house deceit.', Culture: 'Greek' }
];

function TaleSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    fetch('http://localhost:3307/api/having/CharacterCount')
      .then(response => response.json())
      .then(characterCount => {
        // Filter the data based on the keyword and character count
        const filteredData = data.filter((item) =>
          Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
          ) && characterCount[item.TaleName] > 70
        );
        if (filteredData.length === 0) {
          return <div>sorry, the given keyword was not found in the Table of Symbols you selected</div>;
        }
        // Render the filtered data
        return (
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Origin</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.TaleName}</td>
                  <td>{item.MoralLesson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })
      .catch(error => {
        console.error('Error fetching character count:', error);
        // Handle the error
      });

}


export default TaleSort;
