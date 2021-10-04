import axios from "axios";
import { Event } from "./Event";

export const getEvents = async () => {
    return await axios.get<Event[]>("/events");
    
}

export const createEvent = async (event: Event) => {
    return await axios.post("/events", event);
    
}

export const getEvent = async (id:string) => {
    return await axios.get<Event>(`/events/${id}`);
    
}

export const updateEvent = async (id:string, event: Event) => {
    return await axios.put<Event>(`/events/${id}`, event);
    
}

export const deleteEvent = async (id:string) => {
    return await axios.delete<Event>(`/events/${id}`);
    
}