import {RequestHandler} from 'express'
import Event from './Event'

export const getEvents: RequestHandler = async(req, res) => {
    try {
        const events = await Event.find();
        return res.json(events)
    } catch (error) {
        res.json(error)
    }
    
}

export const createEvent: RequestHandler = async (req, res) => {
    // const eventFound = await Event.findOne({url: req.body.email})
    const eventFound = await Event.findOne({firstName: req.body.firstName,lastName: req.body.lastName,email: req.body.email,eventDate: req.body.eventDate,})
    if(eventFound){
        return res.status(301).json({message: 'The email already exists'})
    }
    const event = new Event(req.body)
    const savedEvent = await event.save()
    res.json(savedEvent)
}

export const getEvent: RequestHandler = async (req, res) => {
    const eventFound = await Event.findById(req.params.id)
    if (!eventFound) return res.status(204).json();
    return res.json(eventFound)
}
export const deleteEvent: RequestHandler = async (req, res) => {
    const eventFound = await Event.findByIdAndDelete(req.params.id)
    if (!eventFound) return res.status(204).json();
    return res.json(eventFound)
}

export const updateEvent: RequestHandler = async (req, res) => {
    const eventUpdated = await Event.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    if (!eventUpdated) return res.status(204).json();
    res.json(eventUpdated)
 }
