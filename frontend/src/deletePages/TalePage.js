import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function TalePage() {
    const [taleName, setTaleName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleTaleNameChange = (e) => setTaleName(e.target.value);

    const deleteTaleEntry = async () => {
        if (!taleName) {
            alert("Please enter the Tale name of the entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Tale', { data: { taleName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setTaleName('');
        } catch (error) {
            console.error('Error deleting Tale entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Tale Entry</h2>
            <label>
                <span>Name of Tale entry you'd like to delete:</span>
                <input
                    type="text"
                    value={taleName}
                    onChange={handleTaleNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteTaleEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default TalePage;