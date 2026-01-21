import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token"); // get stored JWT token

      try {
        const res = await fetch("http://localhost:5000/api/products/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // pass token in Authorization header
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.length === 0 && <li>No products available.</li>}
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ${product.price} <br />
            <em>{product.description}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
