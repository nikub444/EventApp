import {Router} from 'express'
import * as eventCtrl from './events.controller'

const router = Router();



router.get('/events', eventCtrl.getEvents)

router.get('/events/:id', eventCtrl.getEvent)

router.post('/events', eventCtrl.createEvent)

router.delete('/events/:id', eventCtrl.deleteEvent)

router.put('/events/:id',eventCtrl.updateEvent)

export default router