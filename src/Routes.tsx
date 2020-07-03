import React from "react";

import { Index } from "./components/pages/index/Index";
import { Switch, Route } from "react-router-dom";
import { Records } from "./components/pages/Records/Records";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/records/:date">
        <Records />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
};
