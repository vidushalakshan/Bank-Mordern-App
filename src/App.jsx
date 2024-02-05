import React from "react";
import Navbar from "./components/Navbar";
import style from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.marginX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
