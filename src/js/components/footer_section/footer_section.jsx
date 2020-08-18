import React from 'react';
import { InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon, MediumIcon2 } from '../common/icons.jsx';

export default class FooterSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='footer-section'>
        <div class='footer-contact-info'>
          <p>
            &copy; Shashwat Kathuria
            <br/>Technologies used: ReactJS, Webpack, HTML, Sass, Javascript
          </p>
        </div>
      </div>
    );
  }
}
