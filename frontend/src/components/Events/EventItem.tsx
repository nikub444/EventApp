import React from "react";
import { Event } from "./Event";
import "./EventItem.css";
import { useHistory } from "react-router-dom";
import * as eventService from "./EventService";

interface Props {
  event: Event;
  loadEvents: () => void;
}

const VideoItem = ({ event, loadEvents }: Props) => {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await eventService.deleteEvent(id);
    loadEvents();
  };
  return (
    <div className="col-md-4">
      <div className="car card-body video-card">
        <div className="d-flex justify-content-between">
          <h1
            className="top-box"
            onClick={() => history.push(`update/${event._id}`)}
          >
            {event.firstName}
          </h1>
          <span
            className="text-danger top-box"
            onClick={() => event._id && handleDelete(event._id)}
          >
            X
          </span>
        </div>
        <p
          className="top-box"
          onClick={() => history.push(`update/${event._id}`)}
        >
          {event.lastName}
        </p>
        <p
          className="top-box"
          onClick={() => history.push(`update/${event._id}`)}
        >
          {event.email}
        </p>
        <p
          className="top-box"
          onClick={() => history.push(`update/${event._id}`)}
        >
          {event.eventDate.toISOString().slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default VideoItem;
