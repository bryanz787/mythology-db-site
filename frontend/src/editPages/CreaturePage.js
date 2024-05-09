import React, { useState } from 'react';
import axios from 'axios';
import './Style.css'; // Ensure you have this CSS file

function CreaturePage() {
    const [characterName, setCharacterName] = useState('');
    const [newCharacterDescription, setNewCharacterDescription] = useState('');
    const [newSupernaturalAbility, setNewSupernaturalAbility] = useState('');
    const [newSpecies, setNewSpecies] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');

    const handleCharacterNameChange = (e) => setCharacterName(e.target.value);
    const handleNewCharacterDescriptionChange = (e) => setNewCharacterDescription(e.target.value);
    const handleNewSupernaturalAbilityChange = (e) => setNewSupernaturalAbility(e.target.value);
    const handleNewSpeciesChange = (e) => setNewSpecies(e.target.value);

    const updateCreatureEntry = async () => {
        if (!characterName) {
            alert("Please enter the character's name.");
            return;
        }

        try {
            const response = await axios.put('http://localhost:3307/api/update/Creature', {
                characterName,
                newCharacterDescription,
                newSupernaturalAbility,
                newSpecies
            });
            console.log(response.data);
            setUpdateMessage("Thanks for your update! It should be reflected in the View Page now.");
            // Optionally reset the form fields here if desired
        } catch (error) {
            console.error('Error updating creature:', error);
            setUpdateMessage("Error updating creature. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Edit Creature Entry</h2>
            <label>
                <span>Type in the Culture of the entry you want to make changes in:</span>
                <input
                    type="text"
                    value={characterName}
                    onChange={handleCharacterNameChange}
                />
            </label>
            <label>
                <span>New Character Description:</span>
                <input
                    type="text"
                    value={newCharacterDescription}
                    onChange={handleNewCharacterDescriptionChange}
                />
            </label>
            <label>
                <span>New Supernatural Ability:</span>
                <input
                    type="text"
                    value={newSupernaturalAbility}
                    onChange={handleNewSupernaturalAbilityChange}
                />
            </label>
            <label>
                <span>New Species:</span>
                <input
                    type="text"
                    value={newSpecies}
                    onChange={handleNewSpeciesChange}
                />
            </label>
            <button type="button" onClick={updateCreatureEntry}>Update</button>
            {updateMessage && <p>{updateMessage}</p>}
        </div>
    );
}

export default CreaturePage;