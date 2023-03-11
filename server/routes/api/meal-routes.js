const router = require('express').Router();

// Import any controllers needed here
const { getAllMeals, getSingleMeal, createMeal, updateMeal, deleteMeal } = require('../../controllers/meal-controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllMeals).post(createMeal);
router.route('/:mealId').get(getSingleMeal).put(updateMeal).delete(deleteMeal);


module.exports = router;
