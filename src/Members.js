import React, { useState, useEffect } from "react";

function Members() {
    const [members, setMembers] = useState([])
    // console.log(members)
    
    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/members')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    

    const singleMember = members.map((member) => (
        <div>
            {`ID: ${member.id} | User: ${member.login}`}
        </div>
    ))

    return (
        <div class="card w-75 mx-auto">
            {singleMember}
        </div>
    )


}

export default Members