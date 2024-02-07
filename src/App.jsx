import React from "react";
import Navbar from "./components/Navbar";
import style from "./style";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${style.marginX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div  className={`${style.boxWidth}`}>
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
