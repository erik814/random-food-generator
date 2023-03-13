import { useState } from 'react';

const SingleMeal = ({ meal, setMeal, setMeals, }) => {

    const handleMealDelete = () => {
        fetch(`/api/meal/${meal._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        setMeals((prevMeals) => {
            return prevMeals.filter((prevMeal) => prevMeal._id !== meal._id);
        });

        setMeal(null);
    };

    const handleMealEdit = () => {
        console.log(meal)
        fetch(`/api/meal/${meal._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <div>
            <div>
                <h2>{meal.name}</h2>
                <p>Ingredients: {meal.ingredients.join(', ')}</p>
                <p>Instructions: {meal.instructions.join(', ')}</p>
            </div>

            <div>
                <button onClick={handleMealEdit}>Edit</button>
                <button onClick={handleMealDelete}>Delete</button>
            </div>
        </div>
    );
};

export default SingleMeal;