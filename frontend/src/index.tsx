import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventList from "./components/Events/EventsList";
import EventForm from "./components/Events/EventForm";

import "react-toastify/dist/ReactToastify.css";
import "bootswatch/dist/pulse/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
