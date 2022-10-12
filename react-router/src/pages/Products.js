import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>This is the Product page</h1>
      <h1>List of products</h1>
      <ul>
        <NavLink to="/products/Product1">Product 1</NavLink>
        <NavLink to="/products/Product2">Product 2</NavLink>
        <NavLink to="/products/Product3">Product 3</NavLink>
      </ul>
    </div>
  );
};

export default Products;
