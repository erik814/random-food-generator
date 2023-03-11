import { useState, useEffect } from 'react';
import { Generator, MealForm } from '../components';

function MealsPage() {

    return(
        <div>
            <h1>Meals Page</h1>
            <Generator/>
            <MealForm/>
        </div>
    )

};


export default MealsPage;