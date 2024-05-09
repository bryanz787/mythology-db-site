import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function CreatureView() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3307/api/fetch/Creature');
          setData(response.data);
        } catch(error) {
            console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Creatures</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Supernatural Ability</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((creature, index) => (
                        <tr key={index}>
                            <td>{creature.CharacterName}</td>
                            <td>{creature.CharacterDescription}</td>
                            <td>{creature.SupernaturalAbility}</td>
                            <td>{creature.Species}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CreatureView;