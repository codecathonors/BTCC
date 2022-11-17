import React from "react";

function Navbar() {
  
    return (
        <nav class="navbar navbar-expand-md bg-light" style={{ marginBottom: 25, fontSize: 20 }}>
            <a class="navbar-brand " href="/">BoomTown API Data</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav nav-pills" >
                    <li class="nav-item active">
                        <a class="nav-link text-decoration-none" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" href="/repos">Repos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" href="/issues">Issues</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" href="/events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" href="/hooks">Hooks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" href="/members">Members</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" href="/public_members">Public Members</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar