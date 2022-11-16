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
            console.log("this is correct")
        } else if (boomtownObj.created_at > boomtownObj.updated_at) {
            alert("Updated at date cannot be before created at date.")
        }
    }
    console.log(boomtownObj.created_at)
    console.log(boomtownObj.updated_at)

    // dateVerification()
    // console.log(boomtownObj)


    //on top level, verify that "public_repos" count matches repository array returned from following /repos
    //maybe count items in repo array with .length, and do a conditional to see
    //if boomtownObj.public_repos === /repos.length
    //wonder if i should make that repos state here and pass down
    //return true, if not return false


return (
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">{boomtownObj.name}</h2>
                <img class="card-img-top" src={boomtownObj.avatar_url} alt="Boomtown's blue logo" style={{ height: 100, width: 100 }}></img>
                <h6 class="card-subtitle mb-2 text-muted">LOGIN {boomtownObj.login}</h6>
                <h6 class="card-subtitle mb-2 text-muted">ID {boomtownObj.id}</h6>
                <h6 class="card-subtitle mb-2 text-muted">LOCATION {boomtownObj.location}</h6>
                <h6 class="card-subtitle mb-2 text-muted">FOLLOWERS {boomtownObj.followers}</h6>
                <h6 class="card-subtitle mb-2 text-muted">FOLLOWING {boomtownObj.following}</h6>
                <h6 class="card-subtitle mb-2 text-muted">PUBLIC REPOS {boomtownObj.public_repos}</h6>
                <h6 class="card-subtitle mb-2 text-muted">PUBLIC GISTS {boomtownObj.public_gists}</h6>
                <h6 class="card-subtitle mb-2 text-muted">ORGANIZATION PROJECTS {boomtownObj.has_organization_projects}</h6>
                <h6 class="card-subtitle mb-2 text-muted">REPOSITORY PROJECTS {boomtownObj.has_repository_projects}</h6>
                <p class="card-text">NODE ID {boomtownObj.node_id}</p>
                <div class="card">
                    <h1>Github API Links</h1>
                    <p class="card-text">{boomtownObj.url}</p>
                    <p class="card-text">REPOS: {boomtownObj.repos_url}</p>
                    <p class="card-text">EVENTS: {boomtownObj.events_url}</p>
                    <p class="card-text">HOOKS: {boomtownObj.hooks_url}</p>
                    <p class="card-text">ISSUES: {boomtownObj.issues_url}</p>
                    <p class="card-text">MEMBERS: {boomtownObj.members_url}</p>
                    <p class="card-text">PUBLIC MEMBERS: {boomtownObj.public_members_url}</p>
                </div>
                <p class="card-text">COMPANY {boomtownObj.company}</p>
                <p class="card-text">TYPE {boomtownObj.type}</p>

                <p class="card-text">DESCRIPTION {boomtownObj.description}</p>
                <div class="card">
                    <h1>Connect with us</h1>
                    <p class="card-text">Blog: {boomtownObj.blog}</p>
                    <p class="card-text">Github: {boomtownObj.html_url}</p>
                    <p class="card-text">Email: {boomtownObj.email}</p>
                    <p class="card-text">Twitter: {boomtownObj.twitter_username}</p>
                    <p class="card-text text-muted">Verified: {boomtownObj.is_verified}</p>
                    {/* above is problem, data not showing */}
                </div>
                <p class="card-text text-muted">Created at: {boomtownObj.created_at}</p>
                <p class="card-text text-muted">Updated at: {boomtownObj.updated_at}</p>
                <p class="card-text text-muted">Verification that updated date is later than created date: {dateVerification()}</p>
            </div>
        </div>
    </div>
)


}

export default Home