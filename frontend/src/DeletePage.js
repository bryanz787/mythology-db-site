import React, {useState} from 'react'
import LocationPage from './deletePages/LocationPage';
import CreaturePage from './deletePages/CreaturePage';
import MortalPage from './deletePages/MortalPage';
import DeityPage from './deletePages/DeityPage';
import PantheonPage from './deletePages/PantheonPage';
import TalePage from './deletePages/TalePage';
import StoryEventPage from './deletePages/StoryEventPage';
import SymbolPage from './deletePages/SymbolPage';
import ArtifactPage from './deletePages/ArtifactPage';
import RitualPage from './deletePages/RitualPage';
import PartOfPage from './deletePages/PartOfPage';
import BelongsToPage from './deletePages/BelongsToPage';
import AppearsInPage from './deletePages/AppearsInPage';
import RepresentsPage from './deletePages/RepresentsPage';

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


function DeletePage() {
  const [selectedTable, setSelectedTable] = useState('');

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the Deletion Page, select a table from the drop-down to start deleting entries</h2>
    
      <div className='h-5'/>{/*spacer*/}

      <h2>To delete entries, type in the primary key name of the entry you'd like to erase</h2>

      <div className='h-8'/>{/*spacer*/}

      <select value={selectedTable} onChange={handleTableChange} className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">
        <option value="">Select a table</option>
        {tables.map(([label, value]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <div className='h-4'/>{/*spacer*/}

      {/* Page component */}
      {selectedTable === 'location' && <LocationPage />}
      {selectedTable === 'creature' && <CreaturePage />}
      {selectedTable === 'mortal' && <MortalPage />}
      {selectedTable === 'deity' && <DeityPage />}
      {selectedTable === 'ritual' && <RitualPage />}
      {selectedTable === 'tale' && <TalePage />}
      {selectedTable === 'storyevent' && <StoryEventPage />}
      {selectedTable === 'pantheon' && <PantheonPage />}
      {selectedTable === 'symbol' && <SymbolPage />}
      {selectedTable === 'artifact' && <ArtifactPage />}
      {selectedTable === 'partof' && <PartOfPage />}
      {selectedTable === 'belongsto' && <BelongsToPage />}
      {selectedTable === 'appearsin' && <AppearsInPage />}
      {selectedTable === 'represents' && <RepresentsPage />}
      {selectedTable === '' && <div>Select A Table First!</div>}
    </div>
  );

}

export default DeletePage;