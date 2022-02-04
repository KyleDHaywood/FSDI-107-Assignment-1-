import "../../public/styles/product.css";
import QuantityPicker from "./quantityPicker";
import Catalog from "../services/service.js";

const Product = (props) => {
  // let totalPrice = price * "#quantityIndicator".innerHTML();

  return (
    <div className="products">
      <div className="page-deets">
        <h2>Iterate over Array and display data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="product">
        <h5>{props.data.title}</h5>
        <img src={"./img/" + props.data.image}></img>
        <p>{props.data.price}</p>
      </div>
    </div>
  );
};

//
//
//
//
//    return (
//   <div className="products">
//   <div className="page-deets">
//     <h2>Iterate over Array and display data</h2>
//   </div>

//   {/* Iterate over imported array in userData */}
//   <div className="product">
//     {Catalog.map((product, index) => (
//       <div key={index}>
//         <h3>{product.title}</h3>
//         <img href={product.image}></img>
//         <p>{product.price}</p>
//       </div>
//     ))}
//   </div>
// </div>
// );
// }
// };
//
//
//
//
//
//

// <div className="product">
//   {Catalog[1].image}
//   <p>Price {price} each</p>
//   <QuantityPicker></QuantityPicker>
//   <p>Total Cost</p>
// </div>
export default Product;
