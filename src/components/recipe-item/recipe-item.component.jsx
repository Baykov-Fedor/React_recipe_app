import React, { useState } from "react";

import "./recipe-item.styles.scss";

const RecipeItem = ({ recipeData }) => {
  const [recipe, openRecipe] = useState(false);
  const makeListOfIngredients = (data) => {
    let arrOfIndegr = [];
    console.log(data["strIngredient" + 1]);
    for (let i = 1; i < 20; i++) {
      if (data["strIngredient" + i] == false) break;
      else {
        arrOfIndegr.push(
          <p>
            {data["strIngredient" + i]} : {data["strMeasure" + i]}
          </p>
        );
      }
    }

    return arrOfIndegr;
  };
  return (
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

      <div className={`full-recipe ${recipe ? "" : "hidden"}`}>
        <div className="full-recipe--header">
          <img />
          <div className="full-recipe--header--ingredients">
            <ul>
              {makeListOfIngredients(recipeData).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="full-recipe--footer"></div>
      </div>
    </div>
  );
};

export default RecipeItem;
