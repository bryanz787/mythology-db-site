import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function RepresentsPage() {
    const [symbolName, setSymbolName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleSymbolNameChange = (e) => setSymbolName(e.target.value);

    const deleteRepresentsEntry = async () => {
        if (!symbolName) {
            alert("Please enter the Symbol Name of the Represents entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Represents', { data: { symbolName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setSymbolName('');
        } catch (error) {
            console.error('Error deleting Represents entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Represents Entry</h2>
            <label>
                <span>Symbol Name of Represents entry you'd like to delete:</span>
                <input
                    type="text"
                    value={symbolName}
                    onChange={handleSymbolNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteRepresentsEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default RepresentsPage;