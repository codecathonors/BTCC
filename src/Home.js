import React, { useState, useEffect } from "react";

function Home() {

    const [boomtownObj, setBoomtownObj] = useState({})

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
            alert("Updated at date cannot be before created at date.")
        }
    }

    //on top level, verify that "public_repos" count matches repository array returned from following /repos
    //maybe count items in repo array with .length, and do a conditional to see
    //if boomtownObj.public_repos === /repos.length
    //wonder if i should make that repos state here and pass down
    //return true, if not return false


return (
    <div>
        <div class="card">
            <div class="card-body">
                <div>
                    <img class="card-img-top" src={boomtownObj.avatar_url} alt="Boomtown's blue logo" style={{ height: 100, width: 100 }}></img>
                    
                </div>
                <div class="card">
                    <p class="card-text">
                        <h1 class="card-title">{boomtownObj.name}</h1>
                        Login: {boomtownObj.login}
                        <br></br>
                        Id: {boomtownObj.id}
                        <br></br>
                        Location: {boomtownObj.location}
                        <br></br>
                        Followers: {boomtownObj.followers}
                        <br></br>
                        Following: {boomtownObj.following}
                        <br></br>
                        Public Repos: {boomtownObj.public_repos}
                        <br></br>
                        Public Gists: {boomtownObj.public_gists}
                        <br></br>
                        Organization Projects: {boomtownObj.has_organization_projects}
                        <br></br>
                        Repository Projects: {boomtownObj.has_repository_projects}
                        <br></br>
                        Node ID: {boomtownObj.node_id}
                        <br></br>
                        Company: {boomtownObj.company}
                        <br></br>
                        Description: {boomtownObj.description}
                        <br></br>
                        Type: {boomtownObj.type}
                    </p>
                    {/* above is problem, data not showing */}
                </div>
                <div class="card">
                    <h3>Github API Links</h3>
                    <p class="card-text">{boomtownObj.url}
                    <br></br> 
                    REPOS: {boomtownObj.repos_url}
                    <br></br>
                    EVENTS: {boomtownObj.events_url}
                    <br></br>
                    HOOKS: {boomtownObj.hooks_url}
                    <br></br>
                    ISSUES: {boomtownObj.issues_url}
                    <br></br>
                    MEMBERS: {boomtownObj.members_url}
                    <br></br>
                    PUBLIC MEMBERS: {boomtownObj.public_members_url}</p>
                </div>
                
                <div class="card">
                    <h3>Connect</h3>
                    <p class="card-text">Blog: {boomtownObj.blog}
                    <br></br>
                    Github: {boomtownObj.html_url}
                    <br></br>
                    Email: {boomtownObj.email}
                    <br></br>
                    Twitter: {boomtownObj.twitter_username}
                    <br></br>
                    Verified: {boomtownObj.is_verified}</p>
                    {/* above is problem, data not showing */}
                </div>
                <p class="card-text text-muted">Created at: {boomtownObj.created_at}</p>
                <p class="card-text text-muted">Updated at: {boomtownObj.updated_at}</p>
                <p class="card-text text-muted">Verification that updated date is later than created date: {String(dateVerification())}</p>
            </div>
        </div>
    </div>
)


}

export default Home