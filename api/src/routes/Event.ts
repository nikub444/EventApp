import {Schema, model} from 'mongoose'

const eventSchema = new Schema({
    firstName: {
        type:String,
        required: true,
        trim:true
    },
    lastName: {
        type:String,
        trim:true,
        required: true,
    },
    email: {
        type:String,
        required: true,
        trim:true,

        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    eventDate: {
        type: Date,
        trim:true,
        required: true,        
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Event', eventSchema)