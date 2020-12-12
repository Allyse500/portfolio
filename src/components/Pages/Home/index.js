import React from 'react';
// import "../../myPhoto.jpg";
// import "../../../index.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutContent from "./About/AboutContent";
import MyPhoto from "../../../Photos/myPhoto.jpg";
import PhotoTitle from "./PhotoTitle/phototitle";


const Home = () => {
    return (   
    <div>   
       <div>
        <PhotoTitle/>
        <img className="photo" src= {MyPhoto} alt="MyPhoto"/>
        </div>
        <AboutContent/>
    </div>
);
}


export default Home;