import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function SymbolView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Symbol');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Symbols</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((symbol, index) => (
                        <tr key={index}>
                            <td>{symbol.SymbolName}</td>
                            <td>{symbol.Origin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SymbolView;