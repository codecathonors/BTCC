import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Repos from './Repos';
import Events from './Events';
import Hooks from './Hooks';
import Issues from './Issues';
import Navbar from './Navbar';
import Members from './Members';
import PublicMembers from './PublicMembers';

function App() {

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
          <Route exact path="/members">
            <Navbar />
            <Members />
          </Route>
          <Route exact path="/public_members">
            <Navbar />
            <PublicMembers />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
