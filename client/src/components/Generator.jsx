import { useState, useEffect } from 'react';

function Generator() {
    const [meals, setMeals] = useState([]);
    const [oneMeal, setOneMeal] = useState({});
    const [showRecipe, setShowRecipe] = useState(false);

    const getAllMeals = () => {
        fetch('/api/meal')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
            })
    }      

    useEffect(() => {
        getAllMeals();
    }, []);

    const randomMeal = () => {
        const random = Math.floor(Math.random() * meals.length);
        setOneMeal(meals[random]);
        setShowRecipe(true);
    }

    return(
        <div className='generator-container'>
            {/* <p>Generator</p> */}
            {showRecipe && (
                <div>
                    <h3>{oneMeal.name}</h3>

                    <div className="random-ingredients">
                        <h4>Ingredients</h4>
                        {oneMeal.ingredients?.map(function(item, idx) {
                            return <p key={idx}>{item}</p>
                        })}
                    </div>

                    <div className="random-instructions">
                        <h4>Instructions</h4>
                        {oneMeal.instructions?.map(function(item, idx) {
                            return <p key={idx}>{item}</p>
                        })}
                    </div>
                </div>
            )}

            <button onClick={randomMeal}>Random Recipe</button>
        </div>
    )

};


export default Generator;