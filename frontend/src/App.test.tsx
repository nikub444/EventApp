import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import * as eventService from "./components/Events/EventService";

test("full app rendering/navigating", () => {
  render(<App />);
  expect(screen.getByText(/List of events/i)).toBeInTheDocument();
  expect(screen.getByText(/Create new event/i)).toBeInTheDocument();
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Create new event/i), leftClick);
  expect(screen.getByText(/New event/)).toBeInTheDocument();
});

it("Api testing", async () => {
  const response = await eventService.getEvents();
  let data = response.data.map((event) => {
    return {
      ...event,
      eventDate: new Date(event.eventDate),
      createdAt: event.createdAt ? new Date(event.createdAt) : new Date(),
      updatedAt: event.updatedAt ? new Date(event.updatedAt) : new Date(),
    };
  });
  expect(data).toBeInstanceOf(Array);
});
