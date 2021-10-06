import { useEffect, useState } from "react";
import { Event } from "./Event";
import * as eventService from "./EventService";
import EventItem from "./EventItem";

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const loadEvents = async () => {
    const res = await eventService.getEvents();

    const formatedVideos = res.data
      .map((event) => {
        return {
          ...event,
          eventDate: new Date(event.eventDate),
          createdAt: event.createdAt ? new Date(event.createdAt) : new Date(),
          updatedAt: event.updatedAt ? new Date(event.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setEvents(formatedVideos);
  };
  useEffect(() => {
    loadEvents();
  }, []);
  return (
    <div className="row">
      {events.map((event) => {
        return (
          <EventItem key={event._id} event={event} loadEvents={loadEvents} />
        );
      })}
    </div>
  );
};

export default EventList;
