import React, { useState, useEffect } from "react";

function Home() {
    const [boomtownObj, setBoomtownObj] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI')
            .then(res => res.json())
            .then(data => setBoomtownObj(data))
    }, []);

    //verify that updated_at value is later than create_at value
    function dateVerification() {
        if (boomtownObj.created_at <= boomtownObj.updated_at) {
            return true
        } else if (boomtownObj.created_at > boomtownObj.updated_at) {
            return false
        }
    }
    
    //verify that public_repos is equal to length of /repos
    function repoVerification() {
        if (boomtownObj.public_repos === repos.length) {
            return true
        } else {
            return false
        }
    }

return (
    <div>
        
        <div class="card w-75 mx-auto">
            <div class="card-body">
                <div>
                    <img class="card-img-top" src={boomtownObj.avatar_url} alt="Boomtown's blue logo" style={{ height: 100, width: 100 }}></img>
                </div>
                <br></br>
                        <h1>{boomtownObj.name}</h1>
                <br></br>
                
                <p class="card-text">ID: {boomtownObj.id}</p>
                <p class="card-text">Public Repos: {boomtownObj.public_repos}</p>
                <p class="card-text">Created at: {boomtownObj.created_at}</p>
                <p class="card-text">Updated at: {boomtownObj.updated_at}</p>
                <p class="card-text text-muted">Verification that updated date is later than created date: {String(dateVerification())}</p>
                <p class="card-text text-muted">Verification that public repo amount matches the repo length on /repos: {String(repoVerification())}</p>
            </div>
        </div>
    </div>
)


}

export default Home