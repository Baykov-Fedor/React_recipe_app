import React, { useState } from "react";
import FullRecipe from "../full-recipe/full-recipe.component";

import "./recipe-item.styles.scss";

const RecipeItem = ({ recipeData }) => {
  const [recipe, openRecipe] = useState(false);

  return (
    <div className="recipe-item">
      <div className="card">
        <img
          src={recipeData.strMealThumb}
          className="card-img-top"
          alt={recipeData.strMeal}
        />
        <div className="card-body">
          <h5 className="card-title">{recipeData.strMeal}</h5>
          <p className="card-text">
            {recipeData.strInstructions.slice(0, 100)}...
          </p>
          <button onClick={() => openRecipe(true)} className="btn btn-danger">
            FULL RECIPE
          </button>
        </div>
      </div>

      {recipe ? (
        <FullRecipe recipeData={recipeData} openRecipe={openRecipe} />
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeItem;
