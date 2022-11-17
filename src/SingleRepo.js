import React from "react";

function SingleRepo( { repo }) {
    

    return (
        <div>
            {`ID: ${repo.id} => ${repo.name} `}
        </div> 
    )


}

export default SingleRepo