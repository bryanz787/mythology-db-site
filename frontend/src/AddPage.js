import React, {useState, useEffect} from 'react';
import LocationForm from './insertForms/LocationForm'
import RitualForm from './insertForms/RitualForm'
import TaleForm from './insertForms/TaleForm'
import StoryEventForm from './insertForms/StoryEventForm'
import PantheonForm from './insertForms/PantheonForm';
import ArtifactForm from './insertForms/ArtifactForm';
import BelongsToForm from './insertForms/BelongsToForm';
import AppearsInForm from './insertForms/AppearsInForm';
import SymbolForm from './insertForms/SymbolForm';
import DeityForm from './insertForms/DeityForm';
import MortalForm from './insertForms/MortalForm';
import CreatureForm from './insertForms/CreatureForm';
import RepresentsForm from './insertForms/RepresentsForm';
import PartOfForm from './insertForms/PartOfForm';

const tables = [["Location","location"],["Ritual","ritual"],["Tale","tale"],["Story Events","storyevent"],["Pantheon","pantheon"],["Artifact","artifact"],["Belongs To","belongsto"],["Appears In","appearsin"],["Symbol","symbol"],["Deity","deity"],["Mortal","mortal"],["Creature","creature"],["Represents","represents"],["Part Of","partof"]];

function AddPage() {
  const [selectedVal, setSelectedVal] = useState('');

  const handleTableChange = (event) => {
    setSelectedVal(event.target.value);
  };

  const renderInsertFields = () => {
    switch (selectedVal) {
      case 'location':
        return <LocationForm/>;
      case 'ritual':
        return <RitualForm/>;
      case 'tale':
        return <TaleForm/>;
      case 'storyevent':
        return <StoryEventForm/>;
      case 'pantheon':
        return <PantheonForm/>;
      case 'artifact':
        return <ArtifactForm/>;
      case 'belongsto':
        return <BelongsToForm/>;
      case 'appearsin':
        return <AppearsInForm/>;
      case 'symbol':
        return <SymbolForm/>;
      case 'deity':
        return <DeityForm/>;
      case 'mortal':
        return <MortalForm/>;
      case 'creature':
        return <CreatureForm/>;
      case 'represents':
        return <RepresentsForm/>;
      case 'partof':
        return <PartOfForm/>;
      
      default: return <div>Select A Table First!</div>;
    }
  }

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the Insert Page, here you can add additional info into the database</h2>
      <p>If you refer to another entry but it doesnt exist, the new entry wont be added</p>

      <div className='h-4'/>{/*spacer*/}

      <select value = {selectedVal} onChange = {handleTableChange} className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">
        <option value="">Select a table</option>
        {tables.map(([label, value]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <div className='h-4'/>{/*spacer*/}

      {renderInsertFields()}
    </div>
  );
}

export default AddPage;