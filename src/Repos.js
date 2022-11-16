import React, { useState, useEffect } from "react";

function Repos() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/repos')
            .then(res => res.json())
            .then(data => setRepos(data))
    }, []);

    

    //need to say for each repo, map through and render on a single repo card

    console.log(repos)

    //could try putting below data into a scrollspy
    //https://getbootstrap.com/docs/5.0/components/scrollspy/#list-item-3

    return (
        <div>
            <div class="card">
               {repos.map(repo =>
                <div class="card">
                    <h1>{repo.name} | {repo.full_name}</h1>
                    <div class="card-body">
                        <h3>{repo.owner.login}</h3>
                        <img class="card-img-top" src={repo.owner.avatar_url} alt="Boomtown's blue logo" style={{ height: 100, width: 100 }}></img>
                        <h6>{repo.owner.url} | {repo.owner.html_url}</h6>
                        <h6>Followers: {repo.owner.followers_url}</h6>
                        <h6>Following: {repo.owner.following_url}</h6>
                        <h6>ID: {repo.owner.id}</h6>
                        <p>Starred: {repo.owner.starred_url}</p>
                        <p>Repos: {repo.owner.repos_url}</p>
                        <p>Events: {repo.owner.events_url}</p>
                        <p>Received Events: {repo.owner.received_events_url}</p>
                        <p>Subscriptions: {repo.owner.subscriptions_url}</p>
                        <p>Organizations: {repo.owner.organizations_url}</p>
                        <p>Gists: {repo.owner.starred_url}</p>
                        <p class="card-subtitle mb-2 text-muted">Type: {repo.owner.type}</p>
                        <p class="card-subtitle mb-2 text-muted">Node ID: {repo.owner.node_id}</p>
                        <p class="card-subtitle mb-2 text-muted">Gravatar ID: {repo.owner.gravatar_id}</p>
                    </div>
                    <div class="card">
                        <p>Homepage: {repo.homepage}</p>
                        <p>Size: {repo.size}</p>
                        <p>Open Issues: {repo.open_issues}</p>
                        <p>Watchers: {repo.watchers}</p>
                        <p>Default Brach: {repo.default_branch}</p>
                        <p>Stargazers Count: {repo.stargazers_count}</p>
                        <p>Watchers Count: {repo.watchers_count}</p>
                        <p>Forks Count: {repo.forks_count}</p>
                        <p>Open Issues Count: {repo.open_issues_count}</p>
                        <p>Language: {repo.language}</p>
                        <p>Mirror: {repo.mirror_url}</p>
                        <p>Has Issues: {repo.has_issues}</p>
                        <p>Has Projects: {repo.has_projects}</p>
                        <p>Has Downloads: {repo.has_downloads}</p>
                        <p>Has Wiki: {repo.has_wiki}</p>
                        <p>Has Pages: {repo.has_pages}</p>
                        <p>Has Discussions: {repo.has_discussions}</p>
                        <p>Allow Forking: {repo.allow_forking}</p>
                        <p>Archived: {repo.archived}</p>
                        <p>Disabled: {repo.disabled}</p>
                        <p>License: {repo.license}</p>
                    </div>
                    <div class="card">
                        <h4>URLs</h4>
                        <h6>Git URL: {repo.git_url}</h6>
                        <h6>SSH URL: {repo.ssh_url}</h6>
                        <h6>Clone URL: {repo.clone_url}</h6>
                        <h6>SVN URL: {repo.svn_url}</h6>
                        <p>Collaborators: {repo.collaborators_url}</p>
                        <p>Contributors: {repo.contributors_url}</p>
                        <p>Commits: {repo.commits_url}</p>
                        <p>Git Commits: {repo.git_commits_url}</p>
                        <p>Comments: {repo.comments_url}</p>
                        <p>Contents: {repo.contents_url}</p>
                        <p>Downloads: {repo.downloads_url}</p>
                        <p>Issues: {repo.issues_url}</p>
                        <p>Releases: {repo.releases_url}</p>
                        <p>Deployments: {repo.deployments_url}</p>
                        <p>Teams: {repo.teams_url}</p>
                        <p>Branches: {repo.branches_url}</p>
                        <p>Merges: {repo.merges_url}</p>
                        <p>Pulls: {repo.pulls_url}</p>
                        <p>Archive: {repo.archive_url}</p>
                        <p>Hooks: {repo.hooks_url}</p>
                        <p>Forks: {repo.forks_url}</p>
                        <p>Issue Events: {repo.issue_events_url}</p>
                        <p>Issue Comments: {repo.issue_comments_url}</p>
                        <p>Events: {repo.events_url}</p>
                        <p>Tags: {repo.tags_url}</p>
                        <p>Blobs: {repo.blobs_url}</p>
                        <p>Assignees: {repo.assignees_url}</p>
                        <p>Milestones: {repo.milestones_url}</p>
                        <p>Notifications: {repo.notifications_url}</p>
                        <p>Labels: {repo.labels_url}</p>
                        <p>Git Tags: {repo.git_tags_url}</p>
                        <p>Git Refs: {repo.git_refs_url}</p>
                        <p>Compare: {repo.compare_url}</p>
                        <p>Trees: {repo.trees_url}</p>
                        <p>Statuses: {repo.statuses_url}</p>
                        <p>Subscribers: {repo.subscribers_url}</p>
                        <p>Subscritions: {repo.subscriptions_url}</p>
                        <p>Languages: {repo.languages_url}</p>
                        <p>Stargazers: {repo.stargazers_url}</p>
                        <p>Keys: {repo.keys_url}</p>
                        <p class="card-subtitle mb-2 text-muted">Created: {repo.created_at}</p>
                        <p class="card-subtitle mb-2 text-muted">Updated: {repo.updated_at}</p>
                        <p class="card-subtitle mb-2 text-muted">Pushed: {repo.pushed_at}</p>
                    </div>
                    <div class="card">
                        <h1>Permissions</h1>
                        <p>Admin: {repo.permissions.admin}</p>
                        <p>Maintain: {repo.permissions.maintain}</p>
                        <p>Push: {repo.permissions.push}</p>
                        <p>Triage: {repo.permissions.false}</p>
                        <p>Pull: {repo.permissions.pull}</p>
                    </div>

                </div>
                )}
            </div>
        </div>
    )


}

export default Repos