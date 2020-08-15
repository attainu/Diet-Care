import React from "react";
import "../CSS/Recipecarditem.css";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

const Recipecarditem = (props) => {
  console.log(props);
  // console.log(props.recipe.id);

  const titleShorter = (title) => {
    if (title.length <= 50) {
      return title;
    } else {
      return `${title.slice(0, 49)}...`;
    }
  };

  return (
    <div className="recipe-card">
<<<<<<< Updated upstream
      <Card>
        <CardImg top width="100%" src={props.recipe.image} alt="Card" />
        <CardBody>
          <CardTitle>{titleShorter(props.recipe.title)}</CardTitle>
          {/* <CardText>
=======
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/recipe/${props.recipe.id}`}
      >
        <Card>
          <CardImg top width="100%" src={props.recipe.image} alt="Card" />
          <CardBody>
            <CardTitle>{props.recipe.title}</CardTitle>
            {/* <CardText>
>>>>>>> Stashed changes
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText> */}
            <hr />
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/recipe/${props.recipe.id}`}
            >
              <Button>Read More</Button>
            </Link>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Recipecarditem;
