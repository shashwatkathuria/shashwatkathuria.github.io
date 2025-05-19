import React from 'react';
import Navbar from './navbar.jsx';
import Description from './description.jsx';
import { InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon, MediumIcon2, EmailIcon } from '../common/icons.jsx';

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='top-section'>
        <img class='top-section-image' src='./assets/ShashwatKathuria.jpg' />
        <Navbar/>
        <div class='navbar-right'>
          <p>
            <b>
            kathuria.1@iitj.ac.in
            <br/>
            shashwatkathuria7@gmail.com
            <br/>
            (+91) - 9971383462
            </b>
          </p>
          <div class='navbar-icons-row'>
            <a href='https://www.linkedin.com/in/shashwat-kathuria-053796182/'>
              <LinkedInIcon className='navbar-icon' />
            </a>
            <a href='https://github.com/shashwatkathuria'>
              <GitHubIcon className='navbar-icon' />
            </a>
            <a href='https://www.medium.com/@shashwatkathuria7'>
              <MediumIcon2 className='navbar-icon' />
            </a>
          </div>
        </div>
      </div>
    );

  }
}
