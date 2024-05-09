import React, { useState } from 'react'
import './TableStyleForSort.css';

const mockData = [
    { CharacterName: 'Achilles', CharacterDescription: 'Achilles was the strongest warrior and hero in the Greek army during the Trojan War. He was the son of Peleus, king of the Myrmidons, and Thetis, a sea nymph', Title: null, Profession: 'Greek Warrior', ChildName: 'Neoptolemus', Culture: 'Greek' },
    { CharacterName: 'Icarus', CharacterDescription: 'son of the inventor Daedalus who perished by flying too near the Sun with waxen wings. See Daedalus', Title: null, Profession: null, ChildName: null, Culture: 'Greek' },
    { CharacterName: 'Daedalus', CharacterDescription: 'Daedalus is Icarus"s father, and a brilliant architect, sculptor, and inventor. He was credited with building for King Minos of Crete the Labyrinth in which the Minotaur was kept', Title: null, Profession: 'Inventor', ChildName: 'Icarus', Culture: 'Greek' },
    { CharacterName: 'Arthur', CharacterDescription: 'The King of Britain, Uther Pendragon, dies, leaving no heir to the throne. As his most powerful knights fight to decide who will succeed, a mysterious sword appears in a stone. Whoever pulls the sword from the stone will be the next king. Arthur pulls the sword', Title: 'King', Profession: 'King of Medieval England', ChildName: 'Mordred', Culture: 'Welsh' },
    { CharacterName: 'Patroclus', CharacterDescription: 'Patroclus was a hero of the Trojan War and is widely known for being the childhood friend and close wartime companion of the hero Achilles. Legends either say that he has a blood relation to Achilles, or was Achilles" lover.', Title: null, Profession: 'Greek Warrior', ChildName: null, Culture: 'Greek' },
    { CharacterName: 'Cú Chulainn', CharacterDescription: 'Legendary hero of Irish mythology known for his unmatched prowess in battle.', Title: null, Profession: 'Warrior', ChildName: null, Culture: 'Celtic' },
    { CharacterName: 'Gilgamesh', CharacterDescription: 'King of Uruk and central character of the Epic of Gilgamesh, known for his strength and adventures.', Title: null, Profession: 'King', ChildName: null, Culture: 'Mesopotamian' },
    { CharacterName: 'Hiawatha', CharacterDescription: 'Legendary figure in Native American folklore, known for his role in uniting the Iroquois tribes.', Title: null, Profession: 'Leader', ChildName: null, Culture: 'Native American' }
];

function MortalSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Mortals you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Description</th>
            <th>Title</th>
            <th>Profession</th>
            <th>Child's Name</th>
            <th>Culture</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.CharacterName}</td>
              <td>{item.CharacterDescription}</td>
              <td>{item.Title}</td>
              <td>{item.Profession}</td>
              <td>{item.ChildName}</td>
              <td>{item.Culture}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}

export default MortalSort;