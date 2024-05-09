import React, { useState } from 'react'
import './TableStyleForSort.css';

const mockData = [
    { CharacterName: 'Achilles', TaleName: 'Story of Achilles' },
    { CharacterName: 'Osiris', TaleName: 'The Death and Resurrection of Osiris' },
    { CharacterName: 'Sun Wukong', TaleName: 'Sun Wukong"s Quest for Immortality' },
    { CharacterName: 'Icarus', TaleName: 'The Myth of Daedalus and Icarus' },
    { CharacterName: 'Apollo', TaleName: 'Story of Achilles' },
    { CharacterName: 'Medusa', TaleName: 'The Gorgon Medusa' },
    { CharacterName: 'Jormungandr', TaleName: 'The Twilight of the Gods' },
    { CharacterName: 'Jormungandr', TaleName: 'The Binding of Jormungandr' },
    { CharacterName: 'Demon Bull King', TaleName: 'The Rebellion of the Demon Bull King' },
    { CharacterName: 'Minotaur', TaleName: 'The Myth of the Minotaur' },
    { CharacterName: 'Trickster Coyote', TaleName: 'Tale of Trickster Coyote' },
    { CharacterName: 'Enki', TaleName: 'Enki and the World Order' },
    { CharacterName: 'Enki', TaleName: 'Enki Saves Humanity' },
    { CharacterName: 'Cernunnos', TaleName: 'Cernunnos and the Cycle of Life' },
    { CharacterName: 'Apollo', TaleName: 'The Birth of Apollo' },
    { CharacterName: 'Apollo', TaleName: 'Apollo and Daphne' },
    { CharacterName: 'Apollo', TaleName: 'Apollo and the Python' },
    { CharacterName: 'Shiva', TaleName: 'Shiva and the Cosmic Dance' },
    { CharacterName: 'Shiva', TaleName: 'The Marriage of Shiva and Parvati' },
    { CharacterName: 'Shiva', TaleName: 'Shiva and the Ganges' },
    { CharacterName: 'Zeus', TaleName: 'The Birth of Zeus' },
    { CharacterName: 'Zeus', TaleName: 'Zeus and the Titans' },
    { CharacterName: 'Zeus', TaleName: 'Zeus and Prometheus' },
    { CharacterName: 'Artemis', TaleName: 'Artemis and Actaeon' },
    { CharacterName: 'Artemis', TaleName: 'The Birth of Artemis' },
    { CharacterName: 'Artemis', TaleName: 'Artemis and Orion' },
    { CharacterName: 'Dionysus', TaleName: 'The Birth of Dionysus' },
    { CharacterName: 'Dionysus', TaleName: 'Dionysus and the Pirates' },
    { CharacterName: 'Dionysus', TaleName: 'The Return of Dionysus' },
    { CharacterName: 'Thor', TaleName: 'Thor"s Battle with Jörmungandr' },
    { CharacterName: 'Jormungandr', TaleName: 'Thor"s Battle with Jörmungandr' },
    { CharacterName: 'Thor', TaleName: 'The Theft of Mjölnir' },
    { CharacterName: 'Thor', TaleName: 'Thor and the Skrymir' },
    { CharacterName: 'Sun Wukong', TaleName: 'Sun Wukong’s Rebellion against Heaven' }
];

function PartOfSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Part-Ofs you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Character</th>
            <th>Tale</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.CharacterName}</td>
              <td>{item.TaleName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}


export default PartOfSort;