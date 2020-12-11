import React from 'react';
// import "../../myPhoto.jpg";
// import "../../../index.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutContent from "./About/AboutContent";
// import MyPhoto from "./Photo/myPhoto.jpg";
// import Resizer from 'react-image-file-resizer';

// Resizer.imageFileResizer(MyPhoto, 300, 300, 'PNG')

const Home = () => {
return (   
    <div>     
        <div className="left">
            <h1>Allyse D. Johnson</h1>
        </div>
        {/* <img src= {MyPhoto} alt="MyPhoto"/> */}
        <AboutContent/>
    </div>
);
}


export default Home;