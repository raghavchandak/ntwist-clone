import "./App.css";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";

//Importing images
import background from "./assets/bg.png";
import firstImg from "./assets/home-1.png";

function App() {
  const [isScrolled, changeIsScrolled] = useState(false);

  const changeNavBgColor = () => {
    if (window.scrollY > 30) changeIsScrolled(true);
    else changeIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBgColor);
    return () => {
      window.removeEventListener("scroll", changeNavBgColor);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="home"
        //Adding background Image to the page
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Navbar isScrolled={isScrolled} />
        <div className="first-page">
          <div>
            <h1 className="first-text">Data-powered solutions</h1>
            <h1 className="first-text">for Industrial Excellence</h1>
            <button className="read-more">Read More</button>
          </div>
          <img src={firstImg} alt="First Image" width="55%" />
        </div>
      </div>
      <div>
        <h1 className="first-text">Data-powered solutions</h1>
        <h1 className="first-text">for Industrial Excellence</h1>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default App;
