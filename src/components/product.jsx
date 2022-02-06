import "../styles/product.css";
import QuantityPicker from "./quantityPicker";
import Catalog from "../components/catalog";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const onQuantityChange = (value) => {
    console.log("qnty changed", value);
    setQuantity(value);
  };
  const getTotal = () => {
    let total = quantity * props.data.price;
    return `$${total.toFixed(2)}`;
  };
  return (
    <div className="productCard product">
      <img className="imgCircle" src={"./img/" + props.data.image}></img>
      <h3>{props.data.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro
        ratione natus!
      </p>
      <p>{props.data.price.toFixed(2)}</p>
      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <label>Total Price: {getTotal()}</label>
    </div>
  );
};

//
//
//
export default Product;
