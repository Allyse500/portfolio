import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./components/Pages/Home/";
import Contact from "./components/Pages/Contact";
import LatestWorks from "./components/Pages/LatestWorks";
import MyPhoto from "./Photos/myPhoto.jpg";
import PhotoTitle from "./components/Pages/Home/PhotoTitle/phototitle";
import "./app.css";


function App() {
  document.title = "Allyse D. Johnson";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <div>
        <PhotoTitle/>
        <img className="photo" src= {MyPhoto} alt="MyPhoto"/>
        </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/latestworks" component={LatestWorks} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
     </Router>
  );
}

export default App;
