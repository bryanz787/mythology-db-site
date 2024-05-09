import React, { useState } from 'react'
import './TableStyleForSort.css';
import axios from 'axios';


const mockData = [
    { ArtifactName: 'Mjollnir', CharacterName: 'Thor' },
    { ArtifactName: 'Arachne"s Tapestry', CharacterName: 'Arachne' },
    { ArtifactName: 'Shield of Achilles', CharacterName: 'Achilles' },
    { ArtifactName: 'Spear of Achilles', CharacterName: 'Achilles' },
    { ArtifactName: 'Wings of Icarus', CharacterName: 'Icarus' },
    { ArtifactName: 'Osiris"s Coffin', CharacterName: 'Osiris' },
    { ArtifactName: 'Sun Wukong"s Golden Headband', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Ruyi Jingu Bang', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Excalibur', CharacterName: 'Arthur' },
    { ArtifactName: 'Cauldron of Dagda', CharacterName: 'Dagda' },
    { ArtifactName: 'Tablets of Destiny', CharacterName: 'Enlil' },
    { ArtifactName: 'Dreamcatcher', CharacterName: 'Trickster Coyote' },
    { ArtifactName: 'Demon Bull King"s Cudgel', CharacterName: 'Demon Bull King' },
    { ArtifactName: 'Armor of Achilles', CharacterName: 'Patroclus' },
    { ArtifactName: 'Gáe Bolga', CharacterName: 'Cú Chulainn' },
    { ArtifactName: 'Goat-drawn Chariot', CharacterName: 'Thor' },
    { ArtifactName: 'Belt of Strength', CharacterName: 'Thor' },
    { ArtifactName: 'Golden Chain Mail', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Phoenix Feather Cap', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Thyrsus', CharacterName: 'Dionysus' },
    { ArtifactName: 'Jormungandr"s Scales', CharacterName: 'Jormungandr' },
    { ArtifactName: 'Thor"s Fishing Hook', CharacterName: 'Thor' }
];


function BelongsToSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Belongs-Tos you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Artifact</th>
            <th>Character</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.ArtifactName}</td>
              <td>{item.CharacterName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}


export default BelongsToSort;