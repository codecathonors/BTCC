import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Repos from './Repos';
import Events from './Events';
import Hooks from './Hooks';
import Issues from './Issues';
import Navbar from './Navbar';


function App() {
  // const [boomtownObj, setBoomtownObj] = useState({})

  // useEffect(() => {
  // fetch('https://api.github.com/orgs/BoomTownROI')
  //   .then (res => res.json())
  //   .then (data => setBoomtownObj(data))
  // }, []);

  // console.log(boomtownObj)

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/repos">
          <Navbar />
          <Repos />
        </Route>
          <Route exact path="/events">
            <Navbar />
            <Events />
          </Route>
          <Route exact path="/hooks">
            <Navbar />
            <Hooks />
          </Route>
          <Route exact path="/issues">
            <Navbar />
            <Issues />
          </Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;