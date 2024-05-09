import React, { useState } from 'react';
import './TableStyleForSort.css';
import axios from 'axios';


const mockData = [
  {
    CharacterName: 'Jormungandr',
    CharacterDescription: 'Midgard Serpent (also World Serpent) in Norse mythology who encircles the realm of Midgard. He is the son of the god Loki and the giantess Angrboða and brother of the great wolf Fenrir and Hel, Queen of the Dead. At Ragnarök, the Twilight of the Gods, he slays and is slain by the god Thor.',
    SupernaturalAbility: 'Virtual invulnerability',
    Species: 'World Serpent',
    Culture: 'Norse'
  },
  {
    CharacterName: 'Medusa',
    CharacterDescription: 'A woman with living snakes in place of hair; her appearance was so hideous that anyone who looked upon her was turned to stone',
    SupernaturalAbility: 'Stonification',
    Species: 'Gorgon',
    Culture: 'Greek'
  },
  {
    CharacterName: 'Demon Bull King',
    CharacterDescription: 'He is the scourge of the Netherworld and the archenemy of the Monkey King',
    SupernaturalAbility: 'Brute Strength',
    Species: 'Giant white bull',
    Culture: 'Chinese'
  },
  {
    CharacterName: 'Minotaur',
    CharacterDescription: 'Half man half bull, born to the wife of king Minos and a bull, imprisoned in the Labyrinth due to King Minos"s shame',
    SupernaturalAbility: 'Strength',
    Species: 'Hybrid Man and Bull',
    Culture: 'Greek'
  },
  {
    CharacterName: 'Kraken',
    CharacterDescription: 'A legendary sea monster of enormous size, etymologically akin to a squid or octopus, said to appear in the sea between Norway and Iceland',
    SupernaturalAbility: null,
    Species: 'Sea monster',
    Culture: 'Norse'
  },
  {
    CharacterName: 'Kelpie',
    CharacterDescription: 'Water spirit in Celtic folklore, often appearing as a horse and known for drowning travellers.',
    SupernaturalAbility: 'Water manipulation',
    Species: 'Water spirit',
    Culture: 'Celtic'
  },
  {
    CharacterName: 'Lamassu',
    CharacterDescription: 'A protective figure from Mesopotamian mythology, Lamassus are depicted with a human head, the body of a bull or lion, wings, and sometimes eagle’s talons',
    SupernaturalAbility: 'Protection',
    Species: 'Mythical creature',
    Culture: 'Mesopotamian'
  },
  {
    CharacterName: 'Thunderbird',
    CharacterDescription: 'Powerful creature in Native American mythology, often associated with storms and thunder.',
    SupernaturalAbility: 'Control over thunder and storms',
    Species: 'Mythical bird',
    Culture: 'Native American'
  }
];

function CreatureSort({ keyword, table }) {
  const [data, setData] = useState(mockData);

  // Filter the data based on the keyword
  const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(keyword.toLowerCase())
      )
  );

  if (filteredData.length === 0) {
      return <div>sorry, the given keyword was not found in the Table of Creatures you selected</div>;
  }

  // Render the filtered data
  return (
      <table>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Description</th>
          <th>Supernatural Ability</th>
          <th>Species</th>
          <th>Culture</th>
          
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{item.CharacterName}</td>
            <td>{item.CharacterDescription}</td>
            <td>{item.SupernaturalAbility}</td>
            <td>{item.Species}</td>
            <td>{item.Culture}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}


export default CreatureSort;