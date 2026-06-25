import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    const { data } = await supabase
      .from("product")
      .select("*");

    // guard against null/undefined data in case of an error
    setProducts(data ?? []);
  }

  async function deleteProduct(id) {
    await supabase
      .from("product")
      .delete()
      .eq("id", id);

    fetchProducts();
  }

  async function updateProduct(id) {
    const newTitle = prompt("Enter new title");

    if (!newTitle) return;

    await supabase
      .from("product")
      .update({ title: newTitle })
      .eq("id", id);

    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">

      <div className="header">
        <h1>Products</h1>

        <button
          className="add-btn"
          onClick={() => navigate("/add")}
        >
          + Add Product
        </button>
      </div>

      <div className="products">

        {products.map((product) => (
          <div className="card" key={product.id}>

            <img
              src={product.image_url}
              alt={product.title}
            />

            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <h3>₹{product.price}</h3>

            <div className="buttons">

              <button
                className="update"
                onClick={() => updateProduct(product.id)}
              >
                Update
              </button>

              <button
                className="delete"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;