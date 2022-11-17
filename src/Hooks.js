import React, { useState, useEffect } from "react";

function Hooks() {
    const [hooks, setHooks] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/hooks')
            .then(res => {
                if (res.status !== 200) {
                    alert("This page is returning a non-200 status code")
                }
            })
            .then(data => setHooks(data))
    }, []);

    return (
        <div class="card w-75 mx-auto" style={{ padding: 30 }}>
            <h5 class="card-title" style={{ fontSize: 30, padding: 10, color: "darkblue" }}>Hooks</h5>
        </div>
    );
}

export default Hooks