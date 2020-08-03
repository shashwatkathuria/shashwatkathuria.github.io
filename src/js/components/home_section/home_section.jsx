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
              Hey there! I am Shashwat, a full-stack software developer and open-source contributor from New Delhi, India.
              I am a final year undergraduate pursuing B.Tech. Computer Science & Engineering at Indian Institute of Technology, Jodhpur.
              <br/>
              <br/>
              I enjoy working on Web Development, Mobile Application Development and Internet of Things (IoT). I also really like working on Data Structures & Algorithms, Cryptography and Machine Learning. I have developed several projects of my own and deployed them on the internet, which can be found in the Projects Section.
            </p>
        </div>

        <div class='industry-experience-section'>
          <div class='industry-start'>
            <h1 class='industry-experience-heading'>Experience</h1>
            <div class='industry-vertical-line'/>
          </div>

            <div class='industry-experience-card'>
              <img src='./assets/gsoc-3.png'/>
              <p class='industry-experience-card-description'>Internship<br/>May - September 2020</p>
            </div>

            <div class='industry-experience-card'>
              <img src='./assets/microsoft-2.png'/>
              <p class='industry-experience-card-description'>Internship<br/>May - July 2020</p>
            </div>

            <div class='industry-experience-card'>
              <img src='./assets/wikimedia.png'/>
              <p class='industry-experience-card-description'>Open Source Contributions<br/>Feb 2020 - Present</p>
            </div>

        </div>

        <div class='technologies-section'>
          <div class='industry-start'>
            <h1 class='industry-experience-heading'>Familiar<br/>Technologies</h1>
            <div class='industry-vertical-line'/>
          </div>

          <div class='technologies-list'>
            <ul>
              <li>React Native</li>
              <li>Android Studio</li>
              <li>Django</li>
              <li>Ruby on Rails</li>
              <li>ReactJS</li>
              <li>AngularJS</li>
              <li>Webpack</li>
              <li>HTML / CSS / Sass</li>
              <li>Raspberry Pi</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>Lua</li>
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
