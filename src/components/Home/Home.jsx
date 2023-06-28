import React from "react"
import "./Home.css"
import background from "../../images/skincares.jpg"

export default function Home (){
  return <div className="home">
    <div className="background">
      {/* <img src={background} alt="Background image" /> */}
      <div className="homeText">
        <h1>Sale 20% off</h1>
        <h2>On Everything</h2>
        <p>Discover the secrets of glowing, radiant skin with our carefuly curated collection of skincare products.</p>
        <button>Shop Now</button>
    </div>
    </div>
  </div>
}