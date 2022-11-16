import React, { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);


    // console.log(events)

  

    return (
        <div>
            <h1> I'm events page</h1>
            {events.map(event => {
                return <div class="card">
                    <p>event: {event.type}</p>
                    <p>id: {event.id}</p>
                    <div class="card">
                        <h6>Actor</h6>
                        <img class="card-img-top" src={event.actor.avatar_url} alt="Various avatars" style={{ height: 100, width: 100 }}></img>
                        <p>ID {event.actor.id}</p>
                        <p>Login {event.actor.login}</p>
                        <p>Display login {event.actor.display_login}</p>
                        <p>Gravatar ID {event.actor.gravatar_id}</p>
                        <p>URL {event.actor.url}</p>
                    </div>
                    <div class="card">
                        <h6>Repo</h6>
                        <p>ID {event.repo.id}</p>
                        <p>Name {event.repo.name}</p>
                        <p>URL {event.repo.url}</p>
                    </div>
                    <div class="card">
                        <h6>Payload</h6>
                        <p>Action {event.payload.action}</p>
                        <p>Push ID {event.payload.push_id}</p>
                        <p>Size {event.payload.size}</p>
                        <p>Distinct Size {event.payload.distinct_size}</p>
                        <p>Ref {event.payload.ref}</p>
                        <p>Head {event.payload.head}</p>
                        <p>Before {event.payload.before}</p>
                        <div class="card">
                            <h6>Commits</h6>
                            {/* <p>sha: {event.payload.commits.map(sha => sha}</p> */}
                        </div>
                        {/* //come back to commits, very nested */}
                    </div>
                    <p>public: {event.public}</p>
                    <p>created: {event.created_at}</p>
                    <div class="card">
                        <h6>Organization</h6>
                        <p>ID {event.org.id}</p>
                        <img class="card-img-top" src={event.org.avatar_url} alt="Boomtown blue logo" style={{ height: 100, width: 100 }}></img>
                        <p>Login {event.org.login}</p>
                        <p>Gravatar ID {event.org.gravatar_id}</p>
                        <p>URL {event.org.url}</p>
                    </div>
                </div>
            })}
        </div>
    )


}

export default Events