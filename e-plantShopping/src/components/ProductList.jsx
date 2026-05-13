import React, { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    category: "Indoor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Cactus",
    price: 18,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 30,
    category: "Flowering",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Orchid",
    price: 35,
    category: "Flowering",
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const addToCart = (id) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, id]);
  };

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>

        <ul>
          <li>Home</li>
          <li>Plants</li>
          <li>Cart ({cartCount})</li>
        </ul>
      </nav>

      <h1>Product Listing</h1>

      <div className="product-grid">
        {plants.map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} />

            <h3>{plant.name}</h3>

            <p>${plant.price}</p>

            <p>{plant.category}</p>

            <button
              disabled={addedItems.includes(plant.id)}
              onClick={() => addToCart(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
