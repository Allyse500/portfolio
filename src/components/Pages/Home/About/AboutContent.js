import React from 'react';


const AboutContent = () => {
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
      height: "fit-content", 
      fontSize: "3vh",
      border: "2px double gold",
      borderWidth: "5px",
      borderRadius: "8px"
    }
    return (   
    <div style = {style}>
        <h1 style ={{fontSize: "235%"}}>Autobiography</h1>     
        <p >My name is Allyse D. Johnson. I graduated from UTSA in Dec. 2016 with
        a B.S. in Chemistry and completed a UT Web Development Bootcamp as of 
        January 2021. Since then, I have been working on independent, private projects,
        building my experience with more languages and techniques. I have 1 year 
        experience using advanced HTML, CSS and JavaScript and have prepared full stack pages
        using React, EJS, Node.js, SQL and MongoDB. Now, my intention is to find
        a job in web development that will permit me to continue this career.
        </p>
    </div>
    );
    }
    
    
    export default AboutContent;