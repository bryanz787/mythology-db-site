import React, { useState } from 'react'
import './TableStyleForSort.css';
const mockData = [
    { RitualName: 'Dionysian Mysteries', Recurring: true, CharacterName: 'Dionysus', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Kharisteria', Recurring: true, CharacterName: 'Artemis', LocationName: 'Athens', TimePeriod: 'classical antiquity' },
    { RitualName: 'Olympic Games', Recurring: true, CharacterName: 'Zeus', LocationName: 'Olympia', TimePeriod: 'classical antiquity' },
    { RitualName: 'Delphi Rituals', Recurring: true, CharacterName: 'Apollo', LocationName: 'Delphi', TimePeriod: 'classical antiquity' },
    { RitualName: 'Maha Shivaratri', Recurring: true, CharacterName: 'Shiva', LocationName: 'Nepal', TimePeriod: 'modern' },
    { RitualName: 'Feast of Samhain', Recurring: true, CharacterName: 'Dagda', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Enuma Elish', Recurring: true, CharacterName: 'Enlil', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Coyote"s Dance of Chaos', Recurring: true, CharacterName: 'Trickster Coyote', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Festival of the Apsu', Recurring: true, CharacterName: 'Enki', LocationName: 'Eridu', TimePeriod: 'ancient times' },
    { RitualName: 'Beltane Celebrations', Recurring: true, CharacterName: 'Cernunnos', LocationName: 'Celtic Lands', TimePeriod: 'Iron Age' },
    { RitualName: 'Pythian Games', Recurring: true, CharacterName: 'Apollo', LocationName: 'Delphi', TimePeriod: 'classical antiquity' },
    { RitualName: 'Feast of Apollo', Recurring: true, CharacterName: 'Apollo', LocationName: 'Delphi', TimePeriod: 'anytime' },
    { RitualName: 'Brauronia', Recurring: true, CharacterName: 'Artemis', LocationName: 'Brauron', TimePeriod: 'classical antiquity' },
    { RitualName: 'Dionysia', Recurring: true, CharacterName: 'Dionysus', LocationName: 'Athens', TimePeriod: 'classical antiquity' },
    { RitualName: 'Osiris Mysteries', Recurring: true, CharacterName: 'Osiris', LocationName: 'Abydos', TimePeriod: 'anytime' }
];


function RitualSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Rituals you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Recuuring</th>
            <th>Character Worshipped</th>
            <th>Location</th>
            <th>Time Period</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.RitualName}</td>
              <td>{item.Recurring ? 'Yes' : 'No'}</td>
              <td>{item.CharacterName}</td>
              <td>{item.LocationName}</td>
              <td>{item.TimePeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}

export default RitualSort;