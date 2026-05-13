import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Get Started");
  };

  return (
    <div className="background-image">
      <div className="landing-page">
        <h1>Welcome to Paradise Nursery</h1>

        <button className="get-started-btn" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
