import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Modules/Dashboard/Dashboard";
import Service from "./Modules/Service/Service";
import Header from "./Components/Header/Header";

export default function Routing() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/service" component={Service} />
        </switch>
      </BrowserRouter>
    </div>
  );
}
