const { Schema, model } = require('mongoose');

const PizzaHuntSchema = new Schema ({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    topping: []
});

// create the Pizza model using the PizzSchema
const Pizza = model('Pizza', PizzaHuntSchema);

//export the Pizza model
module.exports = Pizza;