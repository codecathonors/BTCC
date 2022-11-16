import React, { useState, useEffect } from "react";

function Hooks() {
    const [hooks, setHooks] = useState({})
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI/hooks')
            .then(res => res.json())
            .then(data => setHooks(data))
    }, []);

    function produceError() {
        if (hooks.status_code !== 200) {
            setIsAlertVisible(isAlertVisible => !isAlertVisible)
        }
    }


    produceError()


    return (
        <div>
            <h1> I'm hooks page</h1>
            {isAlertVisible ? <div class="alert alert-danger" role="alert">
                {hooks.message} Check out the <a href={hooks.documentation_url} class="alert-link">documentation</a> here.
            </div> : null}

        </div>
    )


}

export default Hooks