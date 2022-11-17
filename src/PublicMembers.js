import React, { useState, useEffect } from "react";


function PublicMembers() {
    const [publicMembers, setPublicMembers] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/public_members')
            .then(res => res.json())
            .then(data => setPublicMembers(data))
    }, []);

  
    const singlePublicMember = publicMembers.map((publicMember) => (
        <ul>
            <li>{`ID: ${publicMember.id} | User: ${publicMember.login}`}</li>
        </ul>
    ))

    return (
        <div class="card w-75 mx-auto" style={{ padding: 30 }}>
            <h5 class="card-title" style={{ fontSize: 30, padding: 10, color: "darkblue" }}>Public Members</h5>
            {singlePublicMember}
        </div>
    );
}

export default PublicMembers