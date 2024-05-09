import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function MortalPage() {
    const [characterName, setCharacterName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleCharacterNameChange = (e) => setCharacterName(e.target.value);

    const deleteMortalEntry = async () => {
        if (!characterName) {
            alert("Please enter the name of the Mortal you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Mortal', { data: { characterName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setCharacterName('');
        } catch (error) {
            console.error('Error deleting Mortal entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Mortal Entry</h2>
            <label>
                <span>Name of Mortal entry you'd like to delete:</span>
                <input
                    type="text"
                    value={characterName}
                    onChange={handleCharacterNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteMortalEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default MortalPage;