import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

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
    name: "Cactus",
    price: 18,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 25,
    category: "Indoor",
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
  const dispatch = useDispatch();

  const [cartCount, setCartCount] = useState(0);

  const [addedItems, setAddedItems] = useState([]);

  const categories = [
    "Succulents",
    "Indoor",
    "Flowering",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setCartCount(cartCount + 1);

    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>

        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
          }}
        >
          <li>Home</li>
          <li>Plants</li>
          <li>Cart ({cartCount})</li>
        </ul>
      </nav>

      <h1>Product Listing</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {plants
              .filter(
                (plant) => plant.category === category
              )
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    width: "200px",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                  />

                  <h3>{plant.name}</h3>

                  <p>Price: ${plant.price}</p>

                  <button
                    disabled={addedItems.includes(
                      plant.id
                    )}
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                  >
                    {addedItems.includes(plant.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
