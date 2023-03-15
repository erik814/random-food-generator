import { useState, useEffect } from 'react';
import SingleMeal from './SingleMeal';

const AllMeals = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const getAllMeals = () => {
        fetch('/api/meal')
            .then(res => res.json())
            .then(data => {
                setMeals(data);
            });
    };

    useEffect(() => {
        getAllMeals();
    }, []);

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
    };

    return (
        <div className='all-meal-container'>
            <p>All Meals</p>
            <div className='all-meals'>
                {meals.map((meal) => (
                    <div className='all-meals-item' key={meal._id}>
                        <button className='button' onClick={() => handleMealClick(meal)}>{meal.name}</button>
                    </div>
                ))}
            </div>
            <div className='new-display'>
                {selectedMeal && (
                    <SingleMeal meal={selectedMeal} setMeal={setSelectedMeal} setMeals={setMeals}/>
                )}
            </div>
        </div>
    );
};

export default AllMeals;