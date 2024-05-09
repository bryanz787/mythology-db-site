import React, {useState} from 'react'
import './TableStyleForSort.css';
const mockData = [//part of it
    { TaleName: 'Story of Achilles', EventName: 'Achilles becomes invulnerable', EventDescription: 'As a baby Achilles is dipped into the river Styx by his mother who holds him by his heel, rendering him invulnerable', LocationName: 'River Styx', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Achilles goes to war', EventDescription: 'Achilles joins the Trojan war on the side of the Greeks', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Death of Patroclus', EventDescription: 'After his wits were removed by Apollo, Hector kills Patroclus in battle with a spear stab to the stomach', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Death of Hector', EventDescription: 'After a one-on-one fight, Achilles avenges his friend Patroclus by killing Hector', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Achilles gets shot', EventDescription: 'Guided by Apollo, Paris shoots Achilles in his single vulnerable spot, his heel', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'The Myth of Daedalus and Icarus', EventName: 'Icarus loses his wings', EventDescription: 'After flying too close to the sun, the wax on Icarus"s wings melts, leaving him featherless and unable to fly', LocationName: 'Crete', TimePeriod: 'classical antiquity' },
    { TaleName: 'Tale of Dagda and the Cauldron', EventName: 'Dagda retrieves her Cauldron', EventDescription: 'After the Cauldron of Dagna is stolen by Fomorians, Dagda sets out on a quest to retrieve her cauldron.', LocationName: 'Mount Olympus', TimePeriod: 'classical antiquity' },
    { TaleName: 'Tale of Enlil and the Tablets of Destiny', EventName: 'The Tablets of Destiny are stolen', EventDescription: 'Anzu, a monstrous bird, steals the tablet from Enlil, who is entrusted with it because he is the chief of the gods. Enlil embarks on a journey to retrieve the powerful tablets', LocationName: 'Mesopotamia', TimePeriod: 'classical antiquity' },
    { TaleName: 'Trickster Coyote and the Dreamcatcher', EventName: 'Creation of the Dreamcatcher', EventDescription: 'Coyote creates the Dreamcatcher to protect people from bad dreams by filtering them through his web, allowing only good dreams to pass through', LocationName: 'North America', TimePeriod: 'classical antiquity' }
];


function StoryEventSort({ keyword, table }) {
    const [data, setData] = useState(mockData);

    // Filter the data based on the keyword
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (filteredData.length === 0) {
        return <div>sorry, the given keyword was not found in the Table of Tales you selected</div>;
    }

    // Render the filtered data
    return (
        <table>
        <thead>
          <tr>
            
            <th>Tale</th>
            <th>Event</th>
            <th>Description</th>
            <th>Location</th>
            <th>Time Period</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.TaleName}</td>
              <td>{item.EventName}</td>
              <td>{item.EventDescription}</td>
              <td>{item.LocationName}</td>
              <td>{item.TimePeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

}

export default StoryEventSort;