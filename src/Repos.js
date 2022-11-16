import React, { useState, useEffect } from "react";

function Repos() {
    const [repos, setRepos] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, []);


    //need to say for each repo, map through and render on a single repo card

    console.log(repos)

    return (
        <div>
            <h1> I'm REPOS page</h1>
        </div>
    )


}

export default Repos