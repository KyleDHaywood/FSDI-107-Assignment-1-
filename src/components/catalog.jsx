import { useEffect, useState } from "react";
import "../../public/styles/catalog.css";
import Product from "./product";
import DataService from "../services/service";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  // CREAT LOAD DATA FUNCTION
  const loadData = () => {
    console.log("component loaded");

    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
  };

  // WHEN THE COMPONENT LOADS
  useEffect(() => {
    loadData();
  });
  //
  //
  // CREAT A A STATE VARIABLE (PRODUCTS)
  // SET DATA (FROM loadDdata) to the state variable
  //
  //
  return (
    // GET DATA HERE
    <div className="catalog">
      <h2>View Our Products</h2>
      <h5>There are {products.length} products</h5>
      {console.log("component rendered")}

      <div className="productList">
        {products.map((p) => (
          <Product key={p._id} data={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
