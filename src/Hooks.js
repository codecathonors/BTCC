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
        <div>
            <h1 className="error-page">Hooks</h1>
        </div>
    )


}

export default Hooks