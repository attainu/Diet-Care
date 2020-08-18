import React from "react";
import "../CSS/Grocercarditem.css";
import { connect } from "react-redux";
import { addItemtoShoppingList } from "../redux/actions/shoppingActon";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

const groceryCarditem = (props) => {
  console.log(props);
  const handleclick = () => {
    const template = {
      item: props.product.title,
      parse: true,
    };
    console.log(template);
    props.addItemtoShoppingList(props.userData, template);
  };

  const titleShorter = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 39)}...`;
    }
  };
  return (
    <div className="grocery_card">
      <Card>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`searchGroceryItem/${props.product.id}`}
        >
          <CardImg top width="100%" src={props.product.image} alt="Card" />
        </Link>
        <CardBody>
          <CardTitle>{titleShorter(props.product.title)}</CardTitle>
          <Button onClick={handleclick}>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapstatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};
export default connect(mapstatetoprops, {
  addItemtoShoppingList: addItemtoShoppingList,
})(groceryCarditem);

{
  /* <Link
        style={{ textDecoration: "none" }}
        to={`searchGroceryItem/${props.product.id}`}
      >
        <img src={props.product.image} alt="food" />{" "}
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`searchGroceryItem/:${props.product.id}`}
      >
        <h2>{titleShorter(titleShorter(props.product.title))}</h2>
      </Link>

      <button onClick={handleclick}>Add to Cart</button> */
}
