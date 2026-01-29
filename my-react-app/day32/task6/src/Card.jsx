// Card.jsx
import React from "react";

const Card = ({ children }) => {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "300px",
    margin: "10px auto",
  },
};

export default Card;
