import mongoose from 'mongoose';

const flatSchema = new mongoose.Schema({

    flatNumber: {
        type: Number
    },

    block: {
        type: String
    },

    floor: {
        type: Number
    }


})

const Flate = mongoose.model('Flate', flatSchema);

export default Flate ;