import React from "react";

import "./full-recipe.styles.scss";

const FullRecipe = ({ openRecipe, recipeData }) => {
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  const makeListOfIngredients = (data) => {
    let arrOfIndegr = [];
    console.log(data["strIngredient" + 1]);
    for (let i = 1; i < 20; i++) {
      if (data["strIngredient" + i] == false) break;
      else {
        arrOfIndegr.push(
          <div>
            <span style={{ fontWeight: 700 }}>
              {capitalize(data["strIngredient" + i])}:{" "}
            </span>
            <span>{capitalize(data["strMeasure" + i])}</span>
          </div>
        );
      }
    }

    return arrOfIndegr;
  };
  return (
    <div className="modal-window">
      <div className="full-recipe">
        <div className="full-recipe--header">
          <div
            className="full-recipe--header--close-btn"
            onClick={() => openRecipe(false)}
          >
            <i className="fas fa-times" />
          </div>
          <img
            src={recipeData.strMealThumb}
            alt={recipeData.strMeal}
            className="full-recipe--header--img"
          />
          <div className="full-recipe--header--ingredients">
            <ul>
              {makeListOfIngredients(recipeData).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="full-recipe--footer">{recipeData.strInstructions}</div>
      </div>
    </div>
  );
};

export default FullRecipe;
