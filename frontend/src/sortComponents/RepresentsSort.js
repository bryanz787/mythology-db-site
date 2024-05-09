import React, {useState} from 'react'
import './TableStyleForSort.css';

const mockData = [
    { SymbolName: 'Hammer of Thor', CharacterName: 'Thor' },
    { SymbolName: 'Weaving Loom', CharacterName: 'Arachne' },
    { SymbolName: 'Shield', CharacterName: 'Achilles' },
    { SymbolName: 'Man with Wings', CharacterName: 'Icarus' },
    { SymbolName: 'Atef Crown', CharacterName: 'Osiris' },
    { SymbolName: 'Golden Headband', CharacterName: 'Sun Wukong' },
    { SymbolName: 'Golden Dragon', CharacterName: 'Arthur' },
    { SymbolName: 'Ouroboros', CharacterName: 'Jormungandr' },
    { SymbolName: 'Gorgoneion', CharacterName: 'Medusa' },
    { SymbolName: 'Thyrsus', CharacterName: 'Dionysus' },
    { SymbolName: 'Grapevine', CharacterName: 'Dionysus' },
    { SymbolName: 'Leopard', CharacterName: 'Dionysus' },
    { SymbolName: 'Ivy', CharacterName: 'Dionysus' },
    { SymbolName: 'Theater Masks', CharacterName: 'Dionysus' },
    { SymbolName: 'Crook and Flail', CharacterName: 'Osiris' },
    { SymbolName: 'Djed Pillar', CharacterName: 'Osiris' },
    { SymbolName: 'Green Skin', CharacterName: 'Osiris' }
];

function RepresentsSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Represents you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Symbol</th>
            <th>Deity</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.SymbolName}</td>
              <td>{item.CharacterName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}


export default RepresentsSort;