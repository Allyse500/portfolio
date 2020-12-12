import React from 'react';
// import "../../myPhoto.jpg";
// import "../../../index.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutContent from "./About/AboutContent";
import MyPhoto from "../../../Photos/myPhoto.jpg";


const Home = () => {
return (   
    <div>     
        <div className="left">
            <h1>Allyse D. Johnson</h1>
        </div>
        <img className="photo" src= {MyPhoto} alt="MyPhoto"/>
        <AboutContent/>
    </div>
);
}


export default Home;