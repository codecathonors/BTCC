import React, { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);


    console.log(events)



    return (
        <div>
            <h1> I'm events page</h1>
        </div>
    )


}

export default Events