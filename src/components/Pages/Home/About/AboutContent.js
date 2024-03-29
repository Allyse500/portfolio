import React from 'react';
import "./aboutContent.css";


const AboutContent = () => {
    const currentYear = new Date;
    return (   
    <div id="paragraph">
        <h1 id="title">Autobiography</h1>     
        <p >My name is Allyse D. Johnson. I graduated from UTSA in Dec. 2016 with
        a B.S. in Chemistry and completed a UT Web Development Bootcamp as of 
        January 2021. Since then, I have been working on independent, private projects,
        building my experience with more languages and techniques. I have about {currentYear.getFullYear() - 2020} years 
        experience using advanced HTML, CSS and JavaScript and have prepared full stack pages
        using React, EJS, Node.js, PHP, MySQLi and MongoDB. Now, my intention is to find
        a job in web development that will permit me to continue this career.
        </p>
    </div>
    );
    }
    
    
    export default AboutContent;