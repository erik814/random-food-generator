import { useState } from 'react';
import EditMeal from './EditMeal';

const SingleMeal = ({ meal, setMeal, setMeals, }) => {

    // const [selectEdit, setSelectEdit] = useState(null);

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

    // const handleEditClick = (meal) => {
    //     setSelectEdit(meal);
    // };

    return (
        <div>
            <div>
                <h2>{meal.name}</h2>
                <p>Ingredients: {meal.ingredients.join(', ')}</p>
                <p>Instructions: {meal.instructions.join(', ')}</p>
            </div>

            <div>
                {/* <button onClick={handleEditClick()}>Edit</button> */}
                <button onClick={handleMealDelete}>Delete</button>
            </div>

            {/* {selectEdit && (
                <EditMeal meal={meal} />
            )} */}
        </div>
    );
};

export default SingleMeal;