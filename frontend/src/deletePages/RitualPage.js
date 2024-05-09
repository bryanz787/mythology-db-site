import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function RitualPage() {
    const [ritualName, setRitualName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleRitualNameChange = (e) => setRitualName(e.target.value);

    const deleteRitualEntry = async () => {
        if (!ritualName) {
            alert("Please enter the ritualName name of the entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Ritual', { data: { ritualName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setRitualName('');
        } catch (error) {
            console.error('Error deleting Ritual entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Ritual Entry</h2>
            <label>
                <span>Name of Ritual entry you'd like to delete:</span>
                <input
                    type="text"
                    value={ritualName}
                    onChange={handleRitualNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteRitualEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default RitualPage;