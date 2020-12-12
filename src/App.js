import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./components/Pages/Home/";
import Contact from "./components/Pages/Contact";
import LatestWorks from "./components/Pages/LatestWorks";


function App() {
  document.title = "Allyse Johnson";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
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
