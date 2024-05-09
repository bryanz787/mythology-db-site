import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function RepresentsView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Represents');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Represents</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Deity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((represents, index) => (
                        <tr key={index}>
                            <td>{represents.SymbolName}</td>
                            <td>{represents.CharacterName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RepresentsView;
