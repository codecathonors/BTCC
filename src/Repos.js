import React, { useState, useEffect } from "react";
import SingleRepo from "./SingleRepo";

function Repos() {
    const [repos, setRepos] = useState([])
    // console.log(repos)

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, []);
  
    const singleRepo = repos.map((repo) => (
        <div>
            <SingleRepo repo={repo}/>
            <br></br>
        </div>
    ))

    return (
        <div class="card">
            {singleRepo}
        </div>
    )
}

export default Repos