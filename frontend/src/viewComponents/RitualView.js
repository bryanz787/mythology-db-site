import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function RitualView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Ritual');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Rituals</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Recurring</th>
                        <th>Character Worshipped</th>
                        <th>Location</th>
                        <th>Time Period</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ritual, index) => (
                        <tr key={index}>
                            <td>{ritual.RitualName}</td>
                            <td>{ritual.Recurring ? 'Yes' : 'No'}</td>
                            <td>{ritual.CharacterName}</td>
                            <td>{ritual.LocationName}</td>
                            <td>{ritual.TimePeriod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RitualView;