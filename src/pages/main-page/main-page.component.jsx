import React from "react";
import RecipeItem from "../../components/recipe-item/recipe-item.component";

import "./main-page.styles.scss";

const MainPage = ({ data }) => {
  return (
    <div className="main-page">
      {data.map((item) => (
        <RecipeItem key={item.idMeal} recipeData={item} />
      ))}
    </div>
  );
};

export default MainPage;
