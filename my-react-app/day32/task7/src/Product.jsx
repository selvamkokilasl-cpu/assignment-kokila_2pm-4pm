// Product.jsx
import React from "react";

const Product = ({ name, price }) => {
  return (
    <div style={styles.productCard}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

const styles = {
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    maxWidth: "200px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default Product;
