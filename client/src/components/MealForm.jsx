import { useState, useEffect } from 'react';

function MealForm() {

    const [displayName, setDisplayName] = useState("");
    const [displayIngredients, setDisplayIngredients] = useState("");
    const [displayInstructions, setDisplayInstructions] = useState("");

    const [formName, setFormName] = useState("");
    const [formIngredients, setFormIngredients] = useState("");
    const [formInstructions, setFormInstructions] = useState("");

    const [ingArray, setIngArray] = useState([]);
    const [instArray, setInstArray] = useState([]);

    // name

    const handleNameChange = (e) => {
        e.preventDefault()
        setFormName(e.target.value)
    };

    const handleDisplayName = (e) => {
        e.preventDefault()
        setDisplayName(formName)
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
    }

    return(
        <div>
            <h1>Add a meal!</h1>

            <div className="new-display">
                <p>Name: {displayName}</p>
                <p>Ingredients: {displayIngredients}</p>
                <p>Instructions: {displayInstructions}</p>
            </div>


            <form>
                <div className="form-container">
                    <div className="form-section">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formName}
                            onChange={handleNameChange}
                        />
                        <button onClick={handleDisplayName}>Update Name</button>
                    </div>

                    <div className="form-section">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ingredients"
                            name="ingredients"
                            value={formIngredients}
                            onChange={handleIngChange}
                        />
                        <button onClick={handleIngArray}>Add Ingredient</button>
                    </div>

                    <div className="form-section">
                        <label htmlFor="instructions">Instructions:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="instructions"
                            name="instructions"
                            value={formInstructions}
                            onChange={handleInstChange}
                        />
                        <button onClick={handleInstArray}>Add instruction</button>
                    </div>
                </div>
            </form>
        </div>
    )

};


export default MealForm;