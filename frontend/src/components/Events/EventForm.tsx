import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Event } from "./Event";
import * as eventService from "./EventService";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Params {
  id: string;
}

const EventForm = () => {
  const history = useHistory();
  const params = useParams<Params>();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    eventDate: "",
  };
  const [event, setEvent] = useState<Event>(initialState);
  const handleInputChange = (e: inputChange) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await eventService.createEvent(event);
      toast.success("New video added");
      setEvent(initialState);
    } else {
      await eventService.updateEvent(params.id, event);
    }

    history.push("/");
  };
  const getEvent = async (id: string) => {
    const res = await eventService.getEvent(id);
    const { firstName, lastName, email, eventDate } = res.data;
    setEvent({
      firstName,
      lastName,
      email,
      eventDate: new Date(eventDate).toISOString().slice(0, 10),
    });
  };
  useEffect(() => {
    if (params.id) getEvent(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {params.id ? <h3>Updated event</h3> : <h3>New event</h3>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Write first name"
                  className="form-control"
                  onChange={handleInputChange}
                  value={event.firstName}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Write last name"
                  className="form-control"
                  onChange={handleInputChange}
                  value={event.lastName}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Write valid email"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={(e) => console.log(e.target.name)}
                  value={event.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="eventDate"
                  placeholder="Write date of event"
                  className="form-control"
                  onChange={handleInputChange}
                  value={event.eventDate}
                />
              </div>

              {params.id ? (
                <button className="btn btn-info">Update event</button>
              ) : (
                <button className="btn btn-primary">Create event</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
