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
                <div className='generator-container'>
                    <h3>{oneMeal.name}</h3>

                    <div className="random-ingredients">
                        <h4>Ingredients</h4>
                        <ul className='ri-list'>
                            {oneMeal.ingredients?.map(function(item, idx) {
                                return <li key={idx}>{item}</li>
                            })}
                        </ul>
                    </div>

                    <div className="random-instructions">
                        <h4>Instructions</h4>
                        <ol>
                            {oneMeal.instructions?.map(function(item, idx) {
                                return <li key={idx}>{item}</li>
                            })}
                        </ol>
                    </div>
                </div>
            )}

            <button onClick={randomMeal}>Random Recipe</button>
        </div>
    )

};


export default Generator;