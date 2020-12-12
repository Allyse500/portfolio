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
      fontSize: "200%",
      border: "2px double gold",
      borderWidth: "5px",
      borderRadius: "8px"
    }
    return (   
    <div style = {style}>
        <h1 style ={{fontSize: "235%"}}>Autobiography</h1>     
        <p >My name is Allyse D. Johnson. I graduated from The University of 
        Texas at San Antonio in Dec. 2016 with a Bachelor's of Science in
        Chemistry with the focuses of Organic Synthetic and Analytical 
        Chemistry and am currently undergoing study for web development. My 
        intention is to find a job that will permit me to continue in or 
        advance my data science skills. I'm currently working HTML, 
        Javascript and CSS and plan on learning more programming languages 
        to continue to develop webpages with more tools.
        </p>
    </div>
    );
    }
    
    
    export default AboutContent;