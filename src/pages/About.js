import React from 'react';
import { Link } from 'react-router-dom';
import tamirabell-headshot from './../assets/images/tamirabell-headshot.jpg';
import './../assets/styles/about.css';

function About() {
  return (
    <div>
      <div className="container">
       
        {/* Title */}
        <div className="row mb-5">
          <h1>Hello, I am TamiraBell.</h1>
        </div>

        {/* Row to hold my picture and about me section */}
        <div className="row">
          
          {/* Column to hold my picture and icons */}
          <div className="col-lg-6">

            <img src={tamirabell-headshot} alt="tamirabell-headshot" className="w-100" />

            <p>Contact Me:</p>
            <div className="row">
              <a href="https://github.com/tbell-woG" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
              <a href="https://www.linkedin.com/in/tamira-bell" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
              <a href="mailto:tamira.bell@gmail.com"><i className="fas fa-envelope icon"></i></a>
            </div>
            
          </div>

          {/* Column for About Me */}
          <div className="col-lg-6">
            <p className="aboutText">
            Tamira Bell is a very talented and intelligent young lady. She is an exceptional student and has a great
                love for learning. She graduated from high school at Science Leadership Academy (SLA) in Philadelphia.
                In addition to the required curriculum, she learned a lot about filmmaking, photography, and
                graphic design at her high school. She excelled in SLA’s media program and became a student-teacher in
                her senior year.
            </p>
      
            <p className="aboutText">
            Also, Tamira was in a 4-year summer technology program at her high school, where she worked as a computer
                repair technician, repairing and updating all of the computers and laptops for the upcoming school year.
                Through this internship, she learned about the hardware and some software of Apple and PC devices and
                repaired almost 1,000 computers every summer. Also during high school, Tamira was also a four-year
                student of the Women In Natural Sciences Program at the Academy of Natural Sciences of Drexel University
                Museum (ANS). There she developed a deep love and a lot of knowledge for the environment, and nature,
                and the sciences. She also had a 1-year internship in the museum’s Ichthyology Department, where she did
                research on fish specimens.
            </p>

            <p className="aboutText">
            Tamira went on to attend the University of Valley Forge, where she dual-majored in Intercultural Studies
                and Digital Media. She has a strong faith, deep love, and devotion to God. Therefore, her greatest dream is to become a missionary,traveling the world and preaching the wonderful, life-saving message of Jesus Christ. Therefore, her studies in Intercultural Studies or Biblical missionary studies prepared her for that. She also wanted to document her process, so her experience and education in Digital Media prepared her for that. Unfortunately, she could only complete 2 years because of finances, however, that did not stop her from pursuing her dreams. She is an influential and anointed leader in her church and wherever she goes. Every week, she leads a Bible Study for youth and young adults and a prayer meeting. She has also had the opportunity to travel to Haiti on a ministry trip, where she served at a local church and helped build a medical center in Zoranje, Haiti. Through all of this, Tamira has the heart to love and serve God and His people.
            </p>

            <p className="aboutText">
            Tamira is gifted in so many areas. She also had a hair and skincare business, named Rapha and Co. and
                dreamt of opening a beauty and wellness spa. Therefore this year, she completed esthiology/skincare
                school at the Rizzieri Aveda School in New Jersey, where she became a licensed esthetician. So she has a
                deep knowledge of the skin and its functions and can perform various skin care procedures, such as
                facials, waxing, chemical peels, and microdermabrasion.
            </p>

            <p className="aboutText">
            Now she is studying full-stack web development at the University of Pennsylvania because she strongly
                desires to complete an app project that she has been working on for 3 years. She and a friend have a
                dream for an app that will bring hope and encouragement to others. They figured out all the
                technicalities and functions of the app the would provide a great user experience. They also developed
                the visual identity for the branding of this project. This project is very dear to her heart and is the
                motivation that will help her complete the coding program. Completing the program to Tamira is not about
                finding a career or job, making more money, or even becoming successful in life. Rather, completing this
                program is the key for her to be able to unlock and fulfill her life’s purpose and destiny. She will use
                the skills learned in this course to bring give hope and encouragement to others.
            </p>

            <p className="aboutText">
              Check out my <Link to="/portfolio" >portfolio</Link>!
            </p>

            <p className="aboutText">
            I'm experienced in:
              <ul>
                <li>Browser-based Technologies:  HTML5, CSS, JavaScript, jQuery, Bootstrap, and React.js</li>
                <li>Server-side Technologies:  Node.js and Express.js</li>
                <li>Databases:  MySQL, MongoDB, and Mongoose</li>
                <li>API Interaction:  API, JSON, and AJAX</li>
                <li>Deployment:  Git, GitHub Pages, and Heroku</li>
                <li>Other:  Command Line, User Authentication</li>
              </ul>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;