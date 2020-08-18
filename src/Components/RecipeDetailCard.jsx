import React from "react";
import "../CSS/RecipeDetails.css";

const RecipeDetailCard = ({ recipeDetail, similar }) => {
  console.log("similar", similar);
  const titleShorter = (title) => {
    if (title.length <= 25) {
      return title;
    } else {
      return `${title.slice(0, 25)}...`;
    }
  };

  return !!recipeDetail && !!similar ? (
    <section className="recipe-detail">
      <div className="container-fluid section-1">
        <div className="row">
          <div className="col">
            <img src={recipeDetail.image} alt="recipe_img" />
            <h1>{recipeDetail.title}</h1>
            <div className="row">
              <div className="col-lg-6">
                <span className="recipe__score">
                  <strong>
                    <ion-icon name="heart-sharp"></ion-icon> Health Score:
                  </strong>{" "}
                  {recipeDetail.healthScore}%
                </span>
              </div>
              <div className="col-lg-6">
                <span className="recipe__likes">
                  <strong>
                    <ion-icon name="thumbs-up-sharp"></ion-icon> Likes:
                  </strong>{" "}
                  {recipeDetail.aggregateLikes}
                </span>
              </div>
              <div className="col-lg-6">
                <span className="recipe__servings">
                  <strong>
                    <ion-icon name="server-sharp"></ion-icon> Servings:
                  </strong>{" "}
                  {recipeDetail.servings}
                </span>
              </div>
              <div className="col-lg-6">
                <span className="recipe__prep">
                  <strong>
                    <ion-icon name="stopwatch-sharp"></ion-icon> Time:
                  </strong>{" "}
                  {recipeDetail.readyInMinutes} Minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-10">
            {/* <p>{`${recipeDetail.summary}`}</p> */}
            <p>
              This is dummy copy. It is not meant to be read. It has been placed
              here solely to demonstrate the look and feel of finished, typeset
              text. Only for show. He who searches for meaning here will be
              sorely disappointed. These words are here to provide the reader
              with a basic impression of how actual text will appear in its
              final presentation. Think of them merely as actors on a paper
              stage, in a performance devoid of content yet rich in form. That
              being the case, there is really no point in your continuing to
              read them. After all, you have many other things you should be
              doing. Who's paying you to waste this time, anyway?
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid section-2">
        <div className="row justify-content-md-center">
          <div className="col-lg-4">
            <h2>INGREDIENTS</h2>
            {recipeDetail.extendedIngredients &&
              recipeDetail.extendedIngredients.map((ingredient) => {
                if (ingredient) {
                  return (
                    <div key={ingredient.id} className="section-2-table">
                      <table class="table table-primary table-stripped table-borderless table-hover">
                        <tbody>
                          <tr>
                            <th
                              scope="row"
                              style={{ textAlign: "left", fontSize: "1.2rem" }}
                            >
                              {ingredient.name}
                            </th>
                            <td style={{ textAlign: "right" }}>
                              {ingredient.original}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                } else {
                  return <h1>Loading</h1>;
                }
              })}
          </div>
        </div>
      </div>
      <div className="container-fluid section-3">
        <h2>SIMILAR RECIPES</h2>
        <div className="row justify-content-md-center">
          {similar &&
            similar.map((recipe, index) => {
              if (recipe && (index === 2 || index === 3 || index === 5)) {
                return (
                  <div className="col-lg-3 section-3-card" key={recipe.id}>
                    <h4>{titleShorter(recipe.title)}</h4>
                    <span>
                      <strong>
                        <ion-icon name="server-sharp"></ion-icon> Servings:{" "}
                      </strong>{" "}
                      {recipe.servings}
                    </span>
                    <span>
                      <br />
                      <strong>
                        <ion-icon name="stopwatch-sharp"></ion-icon> Time:{" "}
                      </strong>{" "}
                      {recipe.readyInMinutes} mins
                    </span>
                    <br />
                    <a href={recipe.sourceUrl}>Get recipes</a>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </section>
  ) : null;
};

export default RecipeDetailCard;
