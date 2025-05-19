import React from 'react';
import LoadingSpinner from '../common/loading_spinner.jsx';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class='home-section'>
        <h1 class='section-title'>Home</h1>
        <div class='horizontal-line'></div>

        <div class='home-section-content'>
            <p class='description-content'>
              Hi, I'm Shashwat Kathuria — a Full-Stack Software Engineer from New Delhi, India.
              <br/>
              <br/>
              I earned my B.Tech. in Computer Science & Engineering from Indian Institute of Technology, Jodhpur in 2021, and I currently work at Microsoft as a Software Engineer 2, after starting my journey there as a Software Engineer 1.
              <br/>
              <br/>
              My experience spans the full stack — from frontend and backend web development to big data pipelines and cloud infrastructure. I enjoy building scalable systems, contributing to open-source projects, and exploring areas like Machine Learning, Cryptography, Internet of Things, Mobile Application Development, Game Development and Data Structures & Algorithms.
              <br/>
              <br/>
              I have developed several projects of my own and deployed them on the internet, which can be found in the Projects Section.
            </p>
        </div>

        <div class='industry-experience-section'>
          <div class='industry-start'>
            <h1 class='industry-experience-heading'>Experience</h1>
            <div class='industry-vertical-line'/>
          </div>

            <div class='industry-experience-card'>
              <img src='./assets/gsoc-3.png'/>
              <p class='industry-experience-card-description'>Internship<br/>May - Sep 2020</p>
            </div>

            <div class='industry-experience-card'>
              <img src='./assets/microsoft-2.png'/>
              <p class='industry-experience-card-description'>Internship<br/>May - July 2020</p>
            </div>

            <div class='industry-experience-card'>
              <img src='./assets/wikimedia.png'/>
              <p class='industry-experience-card-description'>Open Source Contributions<br/>Jan 2020 - Dec 2020</p>
            </div>

            <div class='industry-experience-card'>
              <img src='./assets/microsoft-2.png'/>
              <p class='industry-experience-card-description'>Software Engineer 1<br/>June 2021 - Sep 2023</p>
            </div>

            <div class='industry-experience-card'>
              <img src='./assets/microsoft-2.png'/>
              <p class='industry-experience-card-description'>Software Engineer 2<br/>Sep 2023 - Present</p>
            </div>

        </div>

        <div class='technologies-section'>
          <div class='industry-start'>
            <h1 class='industry-experience-heading'>Familiar<br/>Technologies</h1>
            <div class='industry-vertical-line'/>
          </div>

          <div class='technologies-list'>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Scala</li>
              <li>Ruby</li>
              <li>Lua</li>
              <li>React Native</li>
              <li>Android Studio</li>
              <li>Apache Spark</li>
              <li>Azure</li>
              <li>Synapse</li>
              <li>Heroku</li>
              <li>Django</li>
              <li>Ruby on Rails</li>
              <li>Flask</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>AngularJS</li>
              <li>Webpack</li>
              <li>HTML / CSS / Sass</li>
              <li>Raspberry Pi</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Git</li>
            </ul>
          </div>

        </div>



      </div>
    );
    // <LoadingSpinner/>

    // Here are some technologies I have recently worked with:
    // <ul class='technologies-list'>
    // <li>React Native</li>
    // <li>Android Studio</li>
    // <li>Django</li>
    // <li>Ruby on Rails</li>
    // <li>ReactJS</li>
    // <li>AngularJS</li>
    // <li>Webpack</li>
    // <li>HTML / CSS / Sass</li>
    // <li>Raspberry Pi</li>
    // <li>Python</li>
    // <li>C</li>
    // <li>C++</li>
    // <li>Java</li>
    // <li>JavaScript</li>
    // <li>Ruby</li>
    // <li>Lua</li>
    //
    // </ul>

  }
}
