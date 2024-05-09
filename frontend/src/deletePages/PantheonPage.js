import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function PantheonPage() {
    const [culture, setCulture] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleCultureChange = (e) => setCulture(e.target.value);

    const deletePantheonEntry = async () => {
        if (!culture) {
            alert("Please enter the culture of the entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Pantheon', { data: { culture } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setCulture('');
        } catch (error) {
            console.error('Error deleting pantheon entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Pantheon Entry</h2>
            <label>
                <span>Culture of Pantheon entry you'd like to delete:</span>
                <input
                    type="text"
                    value={culture}
                    onChange={handleCultureChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deletePantheonEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default PantheonPage;