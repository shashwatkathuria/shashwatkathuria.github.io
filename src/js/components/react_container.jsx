import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={HomeSection}/>
            <Route path="/projects.html" component={ProjectSection}/>
            <Route path="/resume.html" component={ResumeSection}/>
            <Route path="/blogs.html" component={BlogSection}/>
          </Switch>
          <FooterSection/>
        </div>
      </Router>
    );
  }
}

const wrapper = document.getElementById('react-container');
wrapper ? ReactDOM.render(<ReactContainer />, wrapper) : false;
