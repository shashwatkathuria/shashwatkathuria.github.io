import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeSection from './home_section/home_section.jsx';
import ResumeSection from './resume_section/resume_section.jsx';
import ProjectSection from './project_section/project_section.jsx';
import FooterSection from './footer_section/footer_section.jsx';
import BlogSection from './blog_section/blog_section.jsx';
import TopSection from './common/top_section.jsx';

export default class ReactContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <TopSection changeSelectedSection={this.changeSelectedSection} />
          <Routes>
            <Route exact path="/" element={<HomeSection/>}/>
            <Route path="/projects.html" element={<ProjectSection/>}/>
            <Route path="/resume.html" element={<ResumeSection/>}/>
            <Route path="/blogs.html" element={<BlogSection/>}/>
          </Routes>
          <FooterSection/>
        </div>
      </Router>
    );
  }
}

const wrapper = document.getElementById('react-container');
wrapper ? createRoot(wrapper).render(<ReactContainer />) : false;
