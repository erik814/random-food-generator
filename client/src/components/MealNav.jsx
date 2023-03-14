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
                <ul className='meal-nav-list'>
                    <li>
                        <div onClick={() => handleNavClick('generator')}>Random Recipe</div>
                    </li>
                    <li>
                        <div onClick={() => handleNavClick('mealForm')}>Create A Recipe</div>
                    </li>
                    <li>
                        <div onClick={() => handleNavClick('allMeals')}>All Meals</div>
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