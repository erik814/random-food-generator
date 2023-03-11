import { useState, useEffect } from 'react';

function Generator() {
    const [meals, setMeals] = useState([]);
    const [oneMeal, setOneMeal] = useState({});

    const getAllMeals = () => {
        fetch('/api/meal')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
                // console.log(data)
            })
    }      

    useEffect(() => {
        getAllMeals();
    }, []);

    const randomMeal = () => {
        const random = Math.floor(Math.random() * meals.length);
        setOneMeal(meals[random])
        console.log(oneMeal)
    }

    return(
        <div>
            <p>Generator</p>
                <div className="all-meals">
                    <h3>{oneMeal.name}</h3>

                    <div className="random-ingredients">
                        {oneMeal.ingredients?.map(function(item, idx) {
                            return <p key={idx}>{item}</p>
                        })}
                    </div>

                    <div className="random-instructions">
                        {oneMeal.instructions?.map(function(item, idx) {
                            return <p key={idx}>{item}</p>
                        })}
                    </div>
                </div>

            <button onClick={randomMeal}>Random Meal</button>
        </div>
    )

};


export default Generator;