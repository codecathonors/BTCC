import React, { useState, useEffect } from "react";

function Issues() {
    const [issues, setIssues] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/issues')
            .then(res => {
                if (res.status !== 200){
                    alert("This page is returning a non-200 status code")
                }})
            .then(data => setIssues(data))
    }, []);

    return (
        <div>
            <h1 className="error-page">Issues</h1>
        </div>
    )


}

export default Issues