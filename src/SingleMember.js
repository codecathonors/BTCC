import React from "react";

function SingleMembers( { member }) {
    // console.log(member)
    
    return (
        <div>
            {`ID: ${member.id} | User: ${member.login}`}
        </div>
    )
}

export default SingleMembers