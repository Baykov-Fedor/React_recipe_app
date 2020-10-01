import React, { useState } from "react";
import FullRecipe from "../full-recipe/full-recipe.component";

import "./recipe-item.styles.scss";

const RecipeItem = ({ recipeData, favPage, addToFavs, delFromFavs }) => {
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
          <div className="card-body--controls">
            <button
              onClick={() => openRecipe(true)}
              className="btn btn-danger"
              style={{ backgroundColor: "#00b4ae", borderColor: "#00b4ae" }}
            >
              FULL RECIPE
            </button>
            {favPage ? (
              <button
                onClick={() => delFromFavs(recipeData.idMeal)}
                className="btn btn-danger"
              >
                DELETE RECIPE
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {recipe ? (
        <FullRecipe
          recipeData={recipeData}
          openRecipe={openRecipe}
          favPage={favPage}
          addToFavs={addToFavs}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeItem;
