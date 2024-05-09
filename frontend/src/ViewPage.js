import React, {useState} from 'react'
import LocationView from './viewComponents/LocationView';
import CreatureView from './viewComponents/CreatureView';
import MortalView from './viewComponents/MortalView';
import DeityView from './viewComponents/DeityView';
import PantheonView from './viewComponents/PantheonView';
import TaleView from './viewComponents/TaleView';
import StoryEventView from './viewComponents/StoryEventView';
import SymbolView from './viewComponents/SymbolView';
import ArtifactView from './viewComponents/ArtifactView';
import RitualView from './viewComponents/RitualView';
import PartOfView from './viewComponents/PartOfView';
import BelongsToView from './viewComponents/BelongsToView';
import AppearsInView from './viewComponents/AppearsInView';
import RepresentsView from './viewComponents/RepresentsView';

const tables = [
  ["Location","location"],
  ["Ritual","ritual"],
  ["Tale","tale"],
  ["Story Events","storyevent"],
  ["Pantheon","pantheon"],
  ["Artifact","artifact"],
  ["Belongs To","belongsto"],
  ["Appears In","appearsin"],
  ["Symbol","symbol"],
  ["Deity","deity"],
  ["Mortal","mortal"],
  ["Creature","creature"],
  ["Represents","represents"],
  ["Part Of","partof"]
];


function ViewPage() {
  const [selectedTable, setSelectedTable] = useState('');

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the View Page, select a table from the drop-down to view its data</h2>
    
      <div className='h-8'/>{/*spacer*/}

      <h2>To edit entries, double click a row, and then click on the cell you want to edit within that row</h2>
      <h2>Make sure to press "Enter" to save a change!</h2>

      <div className='h-4'/>{/*spacer*/}

      <select value={selectedTable} onChange={handleTableChange} className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">
        <option value="">Select a table</option>
        {tables.map(([label, value]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <div className='h-4'/>{/*spacer*/}

      {/* view component */}
      {selectedTable === 'location' && <LocationView />}
      {selectedTable === 'creature' && <CreatureView />}
      {selectedTable === 'mortal' && <MortalView />}
      {selectedTable === 'deity' && <DeityView />}
      {selectedTable === 'ritual' && <RitualView />}
      {selectedTable === 'tale' && <TaleView />}
      {selectedTable === 'storyevent' && <StoryEventView />}
      {selectedTable === 'pantheon' && <PantheonView />}
      {selectedTable === 'symbol' && <SymbolView />}
      {selectedTable === 'artifact' && <ArtifactView />}
      {selectedTable === 'partof' && <PartOfView />}
      {selectedTable === 'belongsto' && <BelongsToView />}
      {selectedTable === 'appearsin' && <AppearsInView />}
      {selectedTable === 'represents' && <RepresentsView />}
      {selectedTable === '' && <div>Select A Table First!</div>}
    </div>
  );

}

export default ViewPage;