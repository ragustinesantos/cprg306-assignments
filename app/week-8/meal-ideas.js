"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [message, setMessage] = useState("Select an item to see meal ideas");

  async function fetchMealIdeas(ingredientParam) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientParam}`
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async function loadMealIdeas() {
    try {
      if (ingredient) {
        const mealList = await fetchMealIdeas(ingredient);
        setMeals(mealList);
        mealList
          ? setMessage(`Here are some meal ideas using ${ingredient}:`)
          : setMessage(`No meal ideas found for ${ingredient}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      <p>{message}</p>
      {meals && (
        <ul>
          {meals.map((meal) => {
            return (
              <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                <h3>{meal.strMeal}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
