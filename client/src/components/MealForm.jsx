import { useState } from 'react';

function MealForm() {

    const [displayName, setDisplayName] = useState("");
    const [displayIngredients, setDisplayIngredients] = useState("");
    const [displayInstructions, setDisplayInstructions] = useState("");

    const [formName, setFormName] = useState("");
    const [formIngredients, setFormIngredients] = useState("");
    const [formInstructions, setFormInstructions] = useState("");

    const [ingArray, setIngArray] = useState([]);
    const [instArray, setInstArray] = useState([]);

    // const [meal, setMeal] = useState([]);

    // name

    const handleNameChange = (e) => {
        e.preventDefault()
        setFormName(e.target.value)
    };

    const handleDisplayName = (e) => {
        e.preventDefault()
        setDisplayName(formName)
        setFormName("");
    };

    // ingredients 

    const handleIngChange = (e) => {
        e.preventDefault()
        setFormIngredients(e.target.value)
    };

    const handleIngArray = (e) => {
        e.preventDefault()
        setIngArray([...ingArray, formIngredients])
        setDisplayIngredients([...ingArray, formIngredients].join(", "));
        setFormIngredients("");
    }

    // instructions 

    const handleInstChange = (e) => {
        e.preventDefault()
        setFormInstructions(e.target.value)
    };

    const handleInstArray = (e) => {
        e.preventDefault()
        setInstArray([...instArray, formInstructions])
        setDisplayInstructions([...instArray, formInstructions].join(", "));
        setFormInstructions("");
    }

    // submit

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newMeal = {
            name: displayName,
            ingredients: ingArray,
            instructions: instArray
        }
    
        fetch('/api/meal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMeal)
        })
            .then(res => res.json())
            .then(data => {
                console.log(newMeal)
                console.log('displayName: ', displayName)
            })
    
        setDisplayName('')
        setDisplayIngredients('')
        setDisplayInstructions('')
    }

    return(
        <div className='addMealPage'>
            <h1 className='meal-form-header'>Add a recipe!</h1>

            <div className="new-display">
                <p>Name: {displayName}</p>
                <p>Ingredients: {displayIngredients}</p>
                <p>Instructions: {displayInstructions}</p>
            </div>


            <form>
                <div className="form-container">
                    <div className="form-section">
                        <label htmlFor="name">Name:</label>
                        <div className='text-button'>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Recipe Name"
                                value={formName}
                                onChange={handleNameChange}
                            />
                            <button className='form-button' onClick={handleDisplayName}>Add Name</button>
                        </div>
                    </div>

                    <div className="form-section">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <div className='text-button'>
                            <input
                                type="text"
                                className="form-control"
                                id="ingredients"
                                name="ingredients"
                                placeholder="Ingredients - One at a time"
                                value={formIngredients}
                                onChange={handleIngChange}
                            />
                            <button className='form-button' onClick={handleIngArray}>Add Ingredient</button>
                        </div>
                    </div>

                    <div className="form-section">
                        <label htmlFor="instructions">Instructions:</label>
                        <div className='text-button'>
                            <input
                                type="text"
                                className="form-control"
                                id="instructions"
                                name="instructions"
                                placeholder="Instructions - One at a time"
                                value={formInstructions}
                                onChange={handleInstChange}
                            />
                            <button className='form-button' onClick={handleInstArray}>Add instruction</button>
                        </div>
                    </div>

                    <button className='add-meal-button button' onClick={handleSubmit}>Add Meal!</button>
                </div>
            </form>
        </div>
    )

};


export default MealForm;