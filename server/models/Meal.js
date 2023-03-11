const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ingredients: {
            type: Array,
            required: true,
        },
        instructions: {
            type: Array,
            required: true,
        },
    }
);

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal