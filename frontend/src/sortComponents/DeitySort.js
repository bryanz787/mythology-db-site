import React, { useState } from 'react'
import './TableStyleForSort.css';
import axios from 'axios';


const mockData = [
    {
        CharacterName: 'Thor',
        CharacterDescription: 'A prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.',
        Domain: 'Thunder',
        SupernaturalAbility: 'Superstrength',
        Culture: 'Norse'
    },
    {
        CharacterName: 'Osiris',
        CharacterDescription: 'God of the deceased, was the son and oldest child of Geb, the Earth deity and Nut, the sky goddess. His wife and sister was Isis, goddess of motherhood, magic, fertility, death, healing, and rebirth.',
        Domain: 'Underground and Afterlife',
        SupernaturalAbility: 'Telepathy',
        Culture: 'Egyptian'
    },
    {
        CharacterName: 'Sun Wukong',
        CharacterDescription: 'A monkey who was born out of stone and possesses magical powers and strength. The legend of the Monkey King explains how he helped protect Xuan Zang, a monk, on their journey to India in order to bring back Buddhist holy books to China.',
        Domain: 'Trickery',
        SupernaturalAbility: 'Transformation',
        Culture: 'Chinese'
    },
    {
        CharacterName: 'Dionysus',
        CharacterDescription: 'Dionysus is called twice-born because he was born from Semele and then, while she was dying, Zeus saved him by sewing him up in his thigh and keeping him there until he reached maturity. He then "gave birth" to Dionysus, thus making him twice-born.',
        Domain: 'Wine, Festivity, and Fertility',
        SupernaturalAbility: 'Vine manipulation, causing insanity, transformation',
        Culture: 'Greek'
    },
    {
        CharacterName: 'Artemis',
        CharacterDescription: 'Artemis was the twin sister to Apollo and was the daughter of Zeus and Leto. Both Apollo and Artemis took revenge against anyone who attempted to harm their mother. Apollo and Artemis slew the giant Tityus and killed the children of the mortal woman Niobe',
        Domain: 'Archery, Hunting, Moon, and Maidenhood',
        SupernaturalAbility: 'Bowmanship, transformation, and healing',
        Culture: 'Greek'
    }
];


function DeitySort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Deities you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Description</th>
            <th>Domain</th>
            <th>Supernatural Ability</th>
            <th>Culture</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
               <td>
                <input className="full-width-input"
                value={item.CharacterName}
                />
              </td>
              <td>{item.CharacterDescription}</td>
              <td>{item.Domain}</td>
              <td>{item.SupernaturalAbility}</td>
              <td>{item.Culture}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}

export default DeitySort;
