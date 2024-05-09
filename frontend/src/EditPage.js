import React, {useState} from 'react'
import LocationPage from './editPages/LocationPage';
import CreaturePage from './editPages/CreaturePage';
import MortalPage from './editPages/MortalPage';
import DeityPage from './editPages/DeityPage';
import PantheonPage from './editPages/PantheonPage';
import TalePage from './editPages/TalePage';
import StoryEventPage from './editPages/StoryEventPage';
import SymbolPage from './editPages/SymbolPage';
import ArtifactPage from './editPages/ArtifactPage';
import RitualPage from './editPages/RitualPage';
import PartOfPage from './editPages/PartOfPage';
import BelongsToPage from './editPages/BelongsToPage';
import AppearsInPage from './editPages/AppearsInPage';
import RepresentsPage from './editPages/RepresentsPage';

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


function EditPage() {
  const [selectedTable, setSelectedTable] = useState('');

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the Editing Page, select a table from the drop-down to start editing an entry</h2>
    
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

export default EditPage;