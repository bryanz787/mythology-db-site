import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function SymbolPage() {
    const [symbolName, setSymbolName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleSymbolNameChange = (e) => setSymbolName(e.target.value);

    const deleteSymbolEntry = async () => {
        if (!symbolName) {
            alert("Please enter the Symbol name of the entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Symbol', { data: { symbolName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setSymbolName('');
        } catch (error) {
            console.error('Error deleting Symbol entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Symbol Entry</h2>
            <label>
                <span>Name of Symbol entry you'd like to delete:</span>
                <input
                    type="text"
                    value={symbolName}
                    onChange={handleSymbolNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteSymbolEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default SymbolPage;