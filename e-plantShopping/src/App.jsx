import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] =
    useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="background-image">
          <div className="landing-page">
            <h1>Welcome to Paradise Nursery</h1>

            <button
              className="get-started-btn"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
