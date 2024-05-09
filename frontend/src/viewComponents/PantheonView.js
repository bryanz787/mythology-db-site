import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function PantheonView() {
    const [data, setData] = useState([]);
    const [groupBy, setGroupBy] = useState(false);


    const fetchData = async () => {
        try {
            const response = await axios.get((groupBy ? 'http://localhost:3307/api/fetch/TaleHaving' : 'http://localhost:3307/api/fetch/Pantheon'));
            
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }};

    useEffect(() => {
        fetchData();
    }, [groupBy]);

    const handleCheckboxChange = () => {
        setGroupBy(!groupBy);
    };


    return (
        <div>
            <h1 className="table-title">Pantheons</h1>
            <label>
                Display Pantheons with more than one Tale associated
                <input
                    type="checkbox"
                    checked={groupBy}
                    onChange={handleCheckboxChange}
                />
            </label>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Culture</th>
                        <th>Pantheon</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pantheon, index) => (
                        <tr key={index}>
                            <td>{pantheon.Culture}</td>
                            <td>{pantheon.PantheonName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PantheonView;