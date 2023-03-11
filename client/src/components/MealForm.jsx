import { useState, useEffect } from 'react';

function MealForm() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState({});

    return(
        <div>
            <h1>Add a meal!</h1>
            <form>
                <div className="form-container">
                    <div className="form-section">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ingredients"
                            name="ingredients"
                            value={ingredients}
                        />
                    </div>
                </div>
            </form>
        </div>
    )

};


export default MealForm;