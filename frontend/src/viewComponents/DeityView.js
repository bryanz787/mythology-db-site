import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function DeityView() {
    const [data, setData] = useState([]);
    const [showDescription, setShowDescription] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get((showDescription ? 'http://localhost:3307/api/fetch/Deity' : 'http://localhost:3307/api/fetch/DeityNoDesc'));
            
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }};

    useEffect(() => {
        fetchData();
    }, [showDescription]);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div>
            <h1 className="table-title">Deities</h1>

            <button onClick={toggleDescription} className='rounded-full p-1 mb-4 border-2 border-gray-400'>
                {showDescription ? 'Hide Descriptions' : 'Show Descriptions'}
            </button>

            <table className="table-view">
                <thead>
                    <tr>
                        <th>Name</th>
                        {showDescription && <th>Description</th>}
                        <th>Domain</th>
                        <th>Supernatural Ability</th>
                        <th>Culture</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((deity, index) => (
                        <tr key={index}>
                            <td>{deity.CharacterName}</td>
                            {showDescription && <td>{deity.CharacterDescription}</td>}
                            <td>{deity.Domain}</td>
                            <td>{deity.SupernaturalAbility}</td>
                            <td>{deity.Culture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeityView;