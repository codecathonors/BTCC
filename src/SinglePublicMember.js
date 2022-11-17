import React from "react";

function SinglePublicMember({ publicMember }) {

    return (
        <div>
            {`ID: ${publicMember.id} | User: ${publicMember.login}`}
        </div>
    )


}

export default SinglePublicMember