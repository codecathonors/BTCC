import React from "react";

function SingleEvent( { event }) {

    return (
        <div>
            <div class="card w-75 mx-auto">
                <h2>{event.type}</h2>
                <h6 class="card-subtitle mb-2 text-muted">id: {event.id}</h6>
                <div class="card w-50 mx-auto">
                    <h4>Actor</h4>
                    <img class="card-img-top" src={event.actor.avatar_url} alt="Various avatars" style={{ height: 100, width: 100 }}></img>
                    <p>ID: {event.actor.id}</p>
                    <p>Login: {event.actor.login}</p>
                    <p>Display login: {event.actor.display_login}</p>
                    <p>Gravatar ID: {event.actor.gravatar_id}</p>
                    <p>URL: {event.actor.url}</p>
                </div>
                <br></br>
                <div class="card w-50 mx-auto">
                    <h4>Repo</h4>
                    <p>ID: {event.repo.id}</p>
                    <p>Name: {event.repo.name}</p>
                    <p>URL: {event.repo.url}</p>
                    <p>public: {String(event.public)}</p>
                    <p>created: {event.created_at}</p>
                </div>
                <br></br>
                <div class="card w-50 mx-auto">
                    <h4>Payload</h4>
                    <p>Action: {event.payload.action}</p>
                    <p>Push ID: {event.payload.push_id}</p>
                    <p>Size: {event.payload.size}</p>
                    <p>Distinct Size: {event.payload.distinct_size}</p>
                    <p>Ref: {event.payload.ref}</p>
                    <p>Head: {event.payload.head}</p>
                    <p>Before: {event.payload.before}</p>
                    <div class="card w-25">
                        <h4>Commits</h4>
                        {/* <p>sha: {event.payload.commits}</p> */}
                    </div>
                    {/* //come back to commits, very nested */}
                </div>
                <br></br>
                <div class="card w-50 mx-auto">
                    <h4>Organization</h4>
                    <p>ID: {event.org.id}</p>
                    <img class="card-img-top" src={event.org.avatar_url} alt="Boomtown blue logo" style={{ height: 100, width: 100 }}></img>
                    <p>Login: {event.org.login}</p>
                    <p>Gravatar ID: {event.org.gravatar_id}</p>
                    <p>URL: {event.org.url}</p>
                </div>
                <br></br>
            </div>
        </div>
    )


}

export default SingleEvent