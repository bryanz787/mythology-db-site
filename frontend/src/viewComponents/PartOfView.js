import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function PartOfView() {
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState('default');

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const fetchData = async () => {
        try {
            let url = 'http://localhost:3307/api/fetch/PartOf';
            switch (sortBy) {
                case 'alphabetical':
                    url = 'http://localhost:3307/api/fetch/PartOfAlpha';
                    break;
                case 'culture':
                    url = 'http://localhost:3307/api/fetch/PartOfCulture';
                    break;
                default:
                    break;
            }

            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [sortBy]);


    return (
        <div>
            <label htmlFor="sortBy">Sort by:</label>
            <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
                <option value="default">Default</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="culture">Culture</option>
            </select>

            <h1 className="table-title">Part Of</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Tale</th>
                        {sortBy === 'culture' && <th>Culture</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((partOf, index) => (
                        <tr key={index}>
                            <td>{partOf.CharacterName}</td>
                            <td>{partOf.TaleName}</td>
                            {sortBy === 'culture' && <td>{partOf.Culture}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PartOfView;
