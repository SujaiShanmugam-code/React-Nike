import React from "react";

const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <img src="./images/brand_logo.png"></img>
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Content</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
