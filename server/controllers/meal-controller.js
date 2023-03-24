const Meal = require('../models/Meal');

module.exports = {
    getAllMeals(req, res) {
        Meal.find()
            .then((dbMealData) => res.json(dbMealData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleMeal(req, res) {
        Meal.findOne({ _id: req.params.mealId })
            .then((meal) => {
                if (!meal) {
                    res.status(404).json({ message: 'No meal found with this id' });
                    return;
                }
                res.json(meal);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createMeal(req, res) {
        console.log('req.body at controller: ', req.body)
        Meal.create(req.body)
            .then((dbMealData) => res.json(dbMealData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    updateMeal(req, res) {
        Meal.findByIdAndUpdate(
            { _id: req.params.mealId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((dbMealData) => {
                if (!dbMealData) {
                    res.status(404).json({ message: 'No meal found with this id' });
                    return;
                }
                res.json(dbMealData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    deleteMeal(req, res) {
        Meal.findOneAndDelete({ _id: req.params.mealId })
            .then((dbMealData) => {
                if (!dbMealData) {
                    res.status(404).json({ message: 'No meal found with this id' });
                    return;
                }
                res.json(dbMealData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

}