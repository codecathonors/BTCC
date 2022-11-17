import React, { useState, useEffect } from "react";


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
            {`ID: ${publicMember.id} | User: ${publicMember.login}`}
        </div>
    ))

    return (
        <div class="card w-75 mx-auto">
            {singlePublicMember}
        </div>
    )


}

export default PublicMembers