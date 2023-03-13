// import { useState, useEffect } from 'react';

// const AllMeals = () => {
//     const [meals, setMeals] = useState([]);

//     const getAllMeals = () => {
//         fetch('/api/meal')
//             .then(res => res.json())
//             .then(data => {
//                 setMeals(data)
//                 // console.log(data)
//             })
//     }

//     useEffect(() => {
//         getAllMeals();
//     }, []);

//     return (
//         <div>
//             <p>All Meals</p>
//             {meals.map(function (item, idx) {
//                 console.log(meals)
//                 return (
//                     <div key={item._id}>
//                         <button>{item.name}</button>
//                     </div>
//                 )
//             })
//             }
//         </div>
//     );
// }


// export default AllMeals

import { useState, useEffect } from 'react';

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
            {selectedMeal && <MealDetails meal={selectedMeal} />}
        </div>
    );
};

const MealDetails = ({ meal }) => {
    return (
        <div>
            <h2>{meal.name}</h2>
            <p>Ingredients: {meal.ingredients.join(', ')}</p>
            <p>Instructions: {meal.instructions.join(', ')}</p>
        </div>
    );
};

export default AllMeals;