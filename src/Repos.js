import React, { useState, useEffect } from "react";

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
            {`ID: ${repo.id} => ${repo.name} `}
        </div>
    ))

    return (
        <div class="card w-75 mx-auto">
            {singleRepo}
        </div>
    )
}

export default Repos