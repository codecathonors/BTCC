import React, { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    const singleEvent = events.map((event) => (
        <div>
            {`ID: ${event.id} | ${event.type}`}
            
        </div>
    ))

    return (
        <div class="card w-75 mx-auto">
            {singleEvent}
        </div>
    )
}

export default Events