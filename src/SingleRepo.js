import React from "react";

function SingleRepo( { repo }) {

    return (
        <div class="card">
            <h1>Repo Name: {repo.name} ({repo.full_name})</h1>
            <div class="card w-75 mx-auto">
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
            <br></br>
            <div class="card w-75 mx-auto">
                <p>Homepage: {repo.homepage}
                <br></br>
                Size: {repo.size}
                <br></br>
                Open Issues: {repo.open_issues}
                <br></br>
                Watchers: {repo.watchers}
                <br></br>
                Default Brach: {repo.default_branch}
                <br></br>
                Stargazers Count: {repo.stargazers_count}
                <br></br>
                Watchers Count: {repo.watchers_count}
                <br></br>
                Forks Count: {repo.forks_count}
                <br></br>
                Open Issues Count: {repo.open_issues_count}
                <br></br>
                Language: {repo.language}
                <br></br>
                Mirror: {repo.mirror_url}
                <br></br>
                Has Issues: {String(repo.has_issues)}
                <br></br>
                Has Projects: {String(repo.has_projects)}
                <br></br>
                Has Downloads: {String(repo.has_downloads)}
                <br></br>
                Has Wiki: {String(repo.has_wiki)}
                <br></br>
                Has Pages: {String(repo.has_pages)}
                <br></br>
                Has Discussions: {String(repo.has_discussions)}
                <br></br>
                Allow Forking: {String(repo.allow_forking)}
                <br></br>
                Archived: {String(repo.archived)}
                <br></br>
                Disabled: {String(repo.disabled)}
                <br></br>
                {/* License: {repo.license} LICENSE IS AN OBJECT!!!*/}
                <br></br></p>
            </div>
            <br></br>
            <div class="card w-75 mx-auto">
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
            <br></br>
            <div class="card w-25 mx-auto">
                <h4>Permissions</h4>
                <p>Admin: {String(repo.permissions.admin)}</p>
                <p>Maintain: {String(repo.permissions.maintain)}</p>
                <p>Push: {String(repo.permissions.push)}</p>
                <p>Triage: {String(repo.permissions.false)}</p>
                <p>Pull: {String(repo.permissions.pull)}</p>
            </div>
            <br></br>
        </div>
    )


}

export default SingleRepo