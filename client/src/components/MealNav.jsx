import { useState } from 'react';
import Generator from './Generator';
import MealForm from './MealForm';
import AllMeals from './AllMeals';

const MealNav = () => {
    const [activeComponent, setActiveComponent] = useState('');

    const handleNavClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => handleNavClick('generator')}>Generator</button>
                    </li>
                    <li>
                        <button onClick={() => handleNavClick('mealForm')}>Meal Form</button>
                    </li>
                    <li>
                        <button onClick={() => handleNavClick('allMeals')}>All Meals</button>
                    </li>
                </ul>
            </nav>
            <main>
                {activeComponent === 'generator' && <Generator />}
                {activeComponent === 'mealForm' && <MealForm />}
                {activeComponent === 'allMeals' && <AllMeals />}
            </main>
        </div>
    );
}


export default MealNav