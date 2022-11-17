import React, { useState, useEffect } from "react";
import SingleMember from "./SingleMember";

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
            <SingleMember member={member}/>
        </div>
    ))

    return (
        <div class="card">
            {singleMember}
        </div>
    )


}

export default Members