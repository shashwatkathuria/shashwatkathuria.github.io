import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='navbar-container'>
        <h1 class='navbar-title'>Shashwat<br/>Kathuria</h1>
        <div class='vertical-line'></div>
        <nav class='main-navbar'>
          <Link className='navbar-option' to="/">Home</Link>
          <Link className='navbar-option' to="/projects.html">Projects</Link>
          <Link className='navbar-option' to="/resume.html">Resume</Link>
          <Link className='navbar-option' to="/blogs.html">Blogs</Link>
        </nav>
      </div>
    );
  }
}
