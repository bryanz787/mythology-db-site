import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function AppearsInView() {
    const [data, setData] = useState([]);

    // backend fetching for view functionality
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/AppearsIn');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Appears In</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Tale</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((appearsIn, index) => (
                        <tr key={index}>
                            <td>{appearsIn.ArtifactName}</td>
                            <td>{appearsIn.TaleName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AppearsInView;