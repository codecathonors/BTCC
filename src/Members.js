import React, { useState, useEffect } from "react";

function Members() {
    const [members, setMembers] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/members')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    const singleMember = members.map((member) => (
        <ul>
            <li>{`ID: ${member.id} | User: ${member.login}`}</li>
        </ul>
    ))

    return (
        <div class="card w-75 mx-auto" style={{ padding: 30 }}>
            <h5 class="card-title" style={{ fontSize: 30, padding: 10, color: "darkblue" }}>Members</h5>
            {singleMember}
        </div>
    );
}

export default Members