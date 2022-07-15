// src/app.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import MainApp from "./components/app-main"

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>    
    <div id="app">
      <div style={{marginBottom: "5rem"}}>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/mainapp" component={MainApp} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
    </div>    
    </>
  );
};

export default App;
