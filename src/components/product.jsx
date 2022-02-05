import "../styles/product.css";
import QuantityPicker from "./quantityPicker";
import Catalog from "../components/catalog";

const Product = (props) => {
  // let totalPrice = {props.data.price} * "#quantityIndicator".innerHTML();

  return (
    <div className="productCard product">
      <img className="imgCircle" src={"./img/" + props.data.image}></img>
      <h3>{props.data.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro
        ratione natus!
      </p>
      <p>{props.data.price}</p>
      <QuantityPicker></QuantityPicker>
      {/* <p>Total Price: {totalPrice}</p> */}
    </div>
  );
};

//
//
//
export default Product;
