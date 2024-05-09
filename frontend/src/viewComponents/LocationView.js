import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function LocationView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Location');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Locations</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Time Period</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((location, index) => (
                        <tr key={index}>
                            <td>{location.LocationName}</td>
                            <td>{location.AreaDescription}</td>
                            <td>{location.TimePeriod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LocationView;