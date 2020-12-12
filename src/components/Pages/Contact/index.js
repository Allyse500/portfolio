import React from 'react';

import "../../../index.css"

const Contact = () => {
    const style ={
        color: "rgb(63, 23, 63)",
        backgroundColor: "rgb(12, 207, 221, 0.5)",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center",
        position: "absolute",
        top: "23%",
        left: "40%",
        width: "50%",
        fontSize: "200%",
        border: "2px double gold",
        borderWidth: "5px",
        borderRadius: "8px"
      }
    return (
        <div style = {style}>
            <h2 style ={{fontSize:"235%"}}>Contact Information</h2>
            <p>Phone: 737-224-1626</p>
            <p>email: ayubired@gmail.com</p>
            <p>Find me on <a style={{color: "green"}} href= "https://www.linkedin.com/in/allyse-johnson-3b7a84116/">LinkedIn</a></p>
        </div>
        )
        }
    
    export default Contact;