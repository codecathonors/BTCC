import React, { useState, useEffect } from "react";

function Issues() {
    const [issues, setIssues] = useState({})
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/issues')
            .then(res => res.json())
            .then(data => setIssues(data))
    }, []);

    function produceError() {
        if (issues.status_code !== 200) {
            setIsAlertVisible(isAlertVisible => !isAlertVisible)
        }
    }


produceError()


    return (
        <div>
            <h1> I'm issues page</h1>
            {/* {isAlertVisible ? <div class="alert alert-danger" role="alert">
                {issues.message} Check out the <a href={issues.documentation_url} class="alert-link">documentation</a> here.
            </div> : null} */}
            {isAlertVisible ? "yourmom" : null}
            
        </div>
    )


}

export default Issues