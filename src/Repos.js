import React, { useState, useEffect } from "react";

function Repos() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, []);
  
    const singleRepo = repos.map((repo) => (
        <ul>
            <li>{`ID: ${repo.id} | Name: ${repo.name} `}</li>
        </ul>
    ))

    return (
        <div class="card w-75 mx-auto" style={{ padding: 30 }}>
            <h5 class="card-title" style={{ fontSize: 30, padding: 10, color: "darkblue" }}>Repos</h5>
            {singleRepo}
            <br></br>
            <p style={{ textAlign: "center"}}>Repo length is {repos.length}.</p>
        </div>
    );
}

export default Repos