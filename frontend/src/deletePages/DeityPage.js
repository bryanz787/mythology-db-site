import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function DeityPage() {
    const [characterName, setCharacterName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleCharacterNameChange = (e) => setCharacterName(e.target.value);

    const deleteDeityEntry = async () => {
        if (!characterName) {
            alert("Please enter the name of the Deity you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Deity', { data: { characterName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setCharacterName('');
        } catch (error) {
            console.error('Error deleting Deity entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Deity Entry</h2>
            <label>
                <span>Name of Deity entry you'd like to delete:</span>
                <input
                    type="text"
                    value={characterName}
                    onChange={handleCharacterNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteDeityEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default DeityPage;