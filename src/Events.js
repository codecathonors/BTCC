import React, { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    const singleEvent = events.map((event) => (
        <ul>
            <li>{`ID: ${event.id} | Event: ${event.type} | Created At: ${event.created_at}`}</li>
        </ul>
    ))

    return (
        <div class="card w-75 mx-auto" style={{ padding: 30 }}>
            <h5 class="card-title" style={{ fontSize: 30, padding: 10, color: "darkblue" }}>Events</h5>
            {singleEvent}
        </div>
    );
}

export default Events