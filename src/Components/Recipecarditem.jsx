import React from "react";
import "../CSS/Recipecarditem.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Recipecarditem = (props) => {
  console.log(props);
  // console.log(props.recipe.id);

  return (
    <div className="recipe-card">
      <Card>
        <CardImg top width="100%" src={props.recipe.image} alt="Card" />
        <CardBody>
          <CardTitle>{props.recipe.title}</CardTitle>
          {/* <CardText>
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
    </div>
  );
};

export default Recipecarditem;
