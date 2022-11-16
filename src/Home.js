import React, { useState, useEffect } from "react";

function Home() {

    const [boomtownObj, setBoomtownObj] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/orgs/BoomTownROI')
            .then(res => res.json())
            .then(data => setBoomtownObj(data))
    }, []);



    console.log(boomtownObj)


return (
    <div>
        <h1>{boomtownObj.id}</h1>
    </div>
)


}

export default Home