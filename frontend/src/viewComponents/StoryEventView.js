import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function StoryEventView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/StoryEvent');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Story Events</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Tale</th>
                        <th>Event</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Time Period</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((event, index) => (
                        <tr key={index}>
                            <td>{event.TaleName}</td>
                            <td>{event.EventName}</td>
                            <td>{event.EventDescription}</td>
                            <td>{event.LocationName}</td>
                            <td>{event.TimePeriod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StoryEventView;