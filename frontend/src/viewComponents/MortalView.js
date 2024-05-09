import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function MortalView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Mortal');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Mortals</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Title</th>
                        <th>Profession</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((mortal, index) => (
                        <tr key={index}>
                            <td>{mortal.CharacterName}</td>
                            <td>{mortal.CharacterDescription}</td>
                            <td>{mortal.Title}</td>
                            <td>{mortal.Profession}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MortalView;