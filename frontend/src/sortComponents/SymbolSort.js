import React, { useState } from 'react'
import './TableStyleForSort.css';
const mockData = [
    { SymbolName: 'Weaving Loom', Origin: 'Her background as a mortal in the past' },
    { SymbolName: 'Shield', Origin: 'Shield used in his battle against Hector represents Greece"s fight against Troy' },
    { SymbolName: 'Hammer of Thor', Origin: 'Derived from Thor"s hammer which has the power of lightning' },
    { SymbolName: 'Atef Crown', Origin: 'Osiris had worn it as the ruler of the underworld' },
    { SymbolName: 'Man with wings', Origin: 'Shows man"s overreaching ambition' },
    { SymbolName: 'Golden Headband', Origin: 'A painfully tightening fillet given to the hero in case of any unsavoury behaviour' },
    { SymbolName: 'Golden Dragon', Origin: 'A family coat borne by King Arthur"s father, Uther Pendragon' },
    { SymbolName: 'Grapevine', Origin: 'Represents wine, festivity, and the agricultural aspect of Dionysus’s domain.' },
    { SymbolName: 'Leopard', Origin: 'An animal sacred to Dionysus, often depicted with him, symbolizing the god’s wild and untamed nature.' },
    { SymbolName: 'Ivy', Origin: 'Evergreen ivy is associated with Dionysus, symbolizing eternal life and revelry.' },
    { SymbolName: 'Theater Masks', Origin: 'Symbolize the connection of Dionysus to the arts, especially the theater, reflecting the dual nature of comedy and tragedy in human experience.' },
    { SymbolName: 'Crook and Flail', Origin: 'Symbols of the pharaonic authority, representing Osiris as the shepherd of the dead.' },
    { SymbolName: 'Djed Pillar', Origin: 'Symbolizing stability, it is closely associated with Osiris and often represented in his iconography.' },
    { SymbolName: 'Green Skin', Origin: 'Depicting fertility and rebirth, Osiris is often portrayed with green skin, symbolizing life through death.' }
];

function SymbolSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
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
              <td>{item.SymbolName}</td>
              <td>{item.Origin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}
export default SymbolSort;