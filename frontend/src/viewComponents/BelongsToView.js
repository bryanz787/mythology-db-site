import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function BelongsToView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/BelongsTo');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Belongs To</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Character</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((belongsTo, index) => (
                        <tr key={index}>
                            <td>{belongsTo.ArtifactName}</td>
                            <td>{belongsTo.CharacterName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BelongsToView;