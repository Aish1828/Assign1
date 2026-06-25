import { useState,useEffect } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import "../App.css";


export function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("product")
      .select("*");

    if (!error) {
      setProducts(data ?? []);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function deleteProduct(id) {
    await supabase
      .from("product")
      .delete()
      .eq("id", id);

    fetchProducts();
  }

  function startEditing(product) {
    setEditingProductId(product.id);
    setEditingTitle(product.title || "");
  }

  async function updateProduct(id) {
    if (!editingTitle.trim()) {
      alert("Please enter a valid title.");
      return;
    }

    const { data, error } = await supabase
      .from("product")
      .update({ title: editingTitle })
      .eq("id", id);

    if (error) {
      console.error("Update failed", error);
      alert("Update failed: " + error.message);
      return;
    }

    setEditingProductId(null);
    setEditingTitle("");

    if (data?.length) {
      alert("Product updated successfully.");
    }

    fetchProducts();
  }

  function cancelEditing() {
    setEditingProductId(null);
    setEditingTitle("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("product")
      .insert([
        {
          title,
          description,
          price,
          image_url: imageUrl,
        },
      ]);

    if (error) {
      alert("Failed to add product");
      console.log(error);
    } else {
      alert("Product Added Successfully!");

      setTitle("");
      setDescription("");
      setPrice("");
      setImageUrl("");

      fetchProducts();
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "30px",
        }}
      >
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "50px",
        }}
      >
        <label>Product Title</label>
        <input
          type="text"
          placeholder="Enter product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ddd",
          }}
        />

        <label>Description</label>
        <textarea
          rows="4"
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ddd",
          }}
        />

        <label>Price</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ddd",
          }}
        />

        <label>Image URL</label>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ddd",
          }}
        />

        <button
          type="submit"
          style={{
            width: "220px",
            padding: "15px",
            background: "#d79a1e",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Add Product
        </button>
      </form>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <img
              src={product.image_url}
              alt={product.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <h4>₹{product.price}</h4>

              {editingProductId === product.id ? (
                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      style={{
                        flex: 1,
                        padding: "10px",
                        background: "#4caf50",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "6px",
                      }}
                      onClick={() => updateProduct(product.id)}
                    >
                      Save
                    </button>

                    <button
                      style={{
                        flex: 1,
                        padding: "10px",
                        background: "#999",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "6px",
                      }}
                      onClick={cancelEditing}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >
                  <button
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "#4caf50",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      borderRadius: "6px",
                    }}
                    onClick={() => startEditing(product)}
                  >
                    Update
                  </button>

                  <button
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "#f44336",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      borderRadius: "6px",
                    }}
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}