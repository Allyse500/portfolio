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
          <a style={{color: "rgb(63, 23, 63)"}} href="https://github.com/Allyse500/TeamProfileGenerator">Team Profile Generator</a><br/>
          <a style={{color: "rgb(63, 23, 63)"}} href="https://github.com/Allyse500/EmployeeTracker">Employee Tracker</a><br/>
          <a style= {{color: "rgb(63, 23, 63)"}} href="https://github.com/Allyse500/employeedirectory">Employee Directory</a><br/>
          <a style= {{color: "rgb(63, 23, 63)"}} href="https://github.com/Allyse500/CodeQuiz">Code Quiz</a><br/>
          <a style={{color: "rgb(63, 23, 63)"}} href="https://github.com/Allyse500/burger">burger</a><br/>
          <a style={{color: "rgb(63, 23, 63)"}} href="https://github.com/Allyse500/workoutTracker">Workout Tracker</a><br/>
        </div>
          </div>
          );
        }
    
    export default LatestWorks;