import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
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
            {recipeData.strInstructions.slice(0, 95)}...
          </p>
          <div className="card-body--controls">
            <CustomButton onClick={() => openRecipe(true)}>
              FULL RECIPE
            </CustomButton>
            {favPage ? (
              <CustomButton
                onClick={() => delFromFavs(recipeData.idMeal)}
                red={true}
              >
                DELETE RECIPE
              </CustomButton>
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
