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
        <div>
            <p>All Meals</p>
            {meals.map((meal) => (
                <div key={meal._id}>
                    <button onClick={() => handleMealClick(meal)}>{meal.name}</button>
                </div>
            ))}
            {selectedMeal && (
                <SingleMeal meal={selectedMeal} setMeal={setSelectedMeal} setMeals={setMeals}/>
            )}
        </div>
    );
};

export default AllMeals;