import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealsList} from "../components/MealsList";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className="btn" onClick={() => navigation(-1)}>Go Back</button>
        {!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
    </>
}

export {Category};