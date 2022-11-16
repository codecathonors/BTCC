import React, { useState, useEffect } from "react";
import SingleRepo from "./SingleRepo";

function Repos() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, []);
    // console.log(repos)

    const singleRepo = repos.map((repo) => (
        <div>
            <SingleRepo repo={repo}/>
            <br></br>
        </div>
    ))

    return (
        <div>
            {singleRepo}
        </div>
    )
}

export default Repos