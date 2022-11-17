import React, { useState, useEffect } from "react";
import SingleEvent from "./SingleEvent";

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    const singleEvent = events.map((event) => (
        <div>
            <SingleEvent event={event}/>
            <br></br>
        </div>
    ))

    return (
        <div class="card">
            {singleEvent}
        </div>
    )
}

export default Events