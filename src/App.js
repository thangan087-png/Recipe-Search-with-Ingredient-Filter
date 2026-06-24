import React, { useState } from "react";
import "./App.css";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const recipeData = {
    tomato: [
      "Tomato Rice",
      "Tomato Soup",
      "Tomato Curry"
    ],
    chicken: [
      "Chicken Curry",
      "Chicken Fried Rice",
      "Chicken 65"
    ],
    potato: [
      "Potato Fry",
      "Potato Curry",
      "French Fries"
    ]
  };

  const searchRecipes = () => {
    const result = recipeData[ingredient.toLowerCase()];
    if (result) {
      setRecipes(result);
    } else {
      setRecipes([]);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Recipe Finder</h1>

      <input
        type="text"
        placeholder="Enter ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />

      <button onClick={searchRecipes}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe}</li>
            ))}
          </ul>
        ) : (
          ingredient && <p>No recipes found</p>
        )}
      </div>
    </div>
  );
}

export default App;