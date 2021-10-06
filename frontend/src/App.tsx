import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventList from "./components/Events/EventsList";
import EventForm from "./components/Events/EventForm";

import "react-toastify/dist/ReactToastify.css";
import "bootswatch/dist/pulse/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/" exact component={EventList} />
          <Route path="/new-event" component={EventForm} />
          <Route path="/update/:id" component={EventForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
