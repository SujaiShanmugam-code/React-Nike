import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve the best, and we’re here to deliver! Experience
          unmatched comfort, style, and durability with our expertly crafted
          shoes. Whether for work, play, or everyday wear, our footwear ensures
          the perfect fit and support. Step with confidence because your feet
          deserve nothing but the best quality and care!
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>

        <div>
          <div className="shopping">
            <p>Also Available On</p>

            <div className="brandicons">
              <img src="./images/amazon.png" alt="amazon" />

              <img src="./images/flipkart.png" alt="flipkart" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/hero-image.png"></img>
      </div>
    </main>
  );
};

export default Hero;
