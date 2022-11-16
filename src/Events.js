import React, { useState, useEffect } from "react";
import SingleEvent from "./SingleEvent";

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);


    console.log(events[0])

    // function eventLoop() {
    //     for (let i = 0; i <= events.length; i++) {
    //         return "hey"
    //     }
    // }

    // eventLoop()

    // events.forEach(event => {
    //     for (let key in event) {
    //         console.log(`${key}: ${event[key]}`)
    //     }
    // })
    const singleEvent = events.map((event) => (
        <SingleEvent event={event}/>
    ))

  

    return (
        <div>
            {singleEvent}
        </div>
    )


}

export default Events