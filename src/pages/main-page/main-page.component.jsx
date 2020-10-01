import React from "react";
import RecipeItem from "../../components/recipe-item/recipe-item.component";

import "./main-page.styles.scss";

const MainPage = ({ data, favPage, addToFavs, delFromFavs }) => {
  return (
    <div className="main-page">
      {data.length === 0 ? (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ margin: "3rem auto" }}
        >
          There is no recipes.
        </div>
      ) : (
        data.map((item) => (
          <RecipeItem
            key={item.idMeal}
            recipeData={item}
            favPage={favPage}
            addToFavs={addToFavs}
            delFromFavs={delFromFavs}
          />
        ))
      )}
    </div>
  );
};

export default MainPage;
