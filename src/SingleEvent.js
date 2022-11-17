import React from "react";

function SingleEvent( { event }) {

    return (
        <div>
            {`ID: ${event.id} | ${event.type}`}
        </div>
    )


}

export default SingleEvent