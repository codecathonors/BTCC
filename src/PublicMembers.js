import React, { useState, useEffect } from "react";
import SinglePublicMember from "./SinglePublicMember";

function PublicMembers() {
    const [publicMembers, setPublicMembers] = useState([])
    // console.log(publicMembers)


    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/public_members')
            .then(res => res.json())
            .then(data => setPublicMembers(data))
    }, []);

  

    const singlePublicMember = publicMembers.map((publicMember) => (
        <div>
            <SinglePublicMember publicMember={publicMember} />
        </div>
    ))

    return (
        <div class="card">
            {singlePublicMember}
        </div>
    )


}

export default PublicMembers