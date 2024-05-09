import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function ArtifactView() {
    const [data, setData] = useState([]);
    const [showCulture, setShowCulture] = useState(false);


    // Backend fetching for view functionality
    const fetchData = async () => {
        try {
            const response = await axios.get((showCulture ? 'http://localhost:3307/api/fetch/ArtifactCulture' : 'http://localhost:3307/api/fetch/Artifact'));
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
    }};

    useEffect(() => {
        fetchData();
    }, [showCulture]);

    const toggleShowCulture = () => {
        setShowCulture(!showCulture);
    };

    return (
        <div>
            <h1 className="table-title">Artifacts</h1>

            <button onClick={toggleShowCulture} className='rounded-full p-1 mb-4 border-2 border-gray-400'>
                {showCulture ? 'Hide Culture' : 'Show Culture'}
            </button>

            <table className="table-view">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        {showCulture && <th>Culture</th>}
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((artifact, index) => (
                        <tr key={index}>
                            <td>{artifact.ArtifactName}</td>
                            {showCulture && <td>{artifact.Culture}</td>}
                            <td>{artifact.Origin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArtifactView;
