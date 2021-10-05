import {RequestHandler} from 'express'
import Event from './Event'

export const getEvents: RequestHandler = async(req, res) => {
    try {
        const events = await Event.find();
        return res.json(events)
    } catch (error) {
        res.status(500).send('Server Error');
    }
    
}

export const createEvent: RequestHandler = async (req, res) => {
    // const eventFound = await Event.findOne({url: req.body.email})
    try {
        const event = new Event(req.body)
        const savedEvent = await event.save()
        res.json(savedEvent)
    } catch (error) {
        res.status(500).send('Server Error');
}
    
}

export const getEvent: RequestHandler = async (req, res) => {
   try {
        const eventFound = await Event.findById(req.params.id)
        if (!eventFound) return res.status(204).json();
        return res.json(eventFound)
   } catch (error) {
        res.status(500).send('Server Error');
   }
}
export const deleteEvent: RequestHandler = async (req, res) => {
    try {
        const eventFound = await Event.findByIdAndDelete(req.params.id)
        if (!eventFound) return res.status(204).json();
        return res.json(eventFound)
    } catch (error) {
        res.status(500).send('Server Error');
    }
}

export const updateEvent: RequestHandler = async (req, res) => {
    try {
        const eventUpdated = await Event.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        if (!eventUpdated) return res.status(204).json();
        res.json(eventUpdated)
    } catch (error) {
        res.status(500).send('Server Error');
    }
 }
