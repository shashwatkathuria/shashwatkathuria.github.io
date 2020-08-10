import React from 'react';

const RESUME_PATH = './assets/Resume.pdf';

export default class ResumeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='resume-section'>
        <h1 class='section-title'>Resume</h1>
        <div class='horizontal-line'></div>
        <div class='resume-container'>
          <object class='resume' data={RESUME_PATH} type='application/pdf' width='70%' height='800px'>
              <p>It appears you don't have a PDF plugin for this browser.
                You can <a href={RESUME_PATH}>click here to
                download the PDF file.</a></p>
          </object>
        </div>
      </div>
    );
  }
}
