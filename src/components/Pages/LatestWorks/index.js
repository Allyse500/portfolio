 import React from 'react';
 import "../../../index.css"

const LatestWorks = () => {
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
              <h1 style ={{fontSize: "235%"}}>Latest Works</h1>     
              <div>
          <a style={{color: "rgb(63, 23, 63)"}} href="https://hidden-savannah-06355.herokuapp.com/" target="_blank" rel="noreferrer">Google Books Search</a><br/>
          <a style= {{color: "rgb(63, 23, 63)"}} href="https://allyse500.github.io/CodeQuiz/" target="_blank" rel="noreferrer">Code Quiz</a><br/>
          <a style={{color: "rgb(63, 23, 63)"}} href="https://safe--route.herokuapp.com/" target="_blank" rel="noreferrer">Safe Route</a><br/>
        </div>
          </div>
          );
        }
    
    export default LatestWorks;