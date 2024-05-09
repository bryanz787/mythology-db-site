import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function PartOfPage() {
    const [characterName, setCharacterName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleCharacterNameChange = (e) => setCharacterName(e.target.value);

    const deletePartOfEntry = async () => {
        if (!characterName) {
            alert("Please enter the Character Name of the PartOf entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/PartOf', { data: { characterName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setCharacterName('');
        } catch (error) {
            console.error('Error deleting PartOf entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete PartOf Entry</h2>
            <label>
                <span>Character Name of PartOf entry you'd like to delete:</span>
                <input
                    type="text"
                    value={characterName}
                    onChange={handleCharacterNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deletePartOfEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default PartOfPage;