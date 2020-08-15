import React from 'react';
import ProjectCard from './project_card.jsx';

export default class ProjectSection extends React.Component {

  constructor(props) {
    super(props);

    this.projects = [
      {
        title: 'Drawing Canvas',
        // time: 'FEBRUARY 2020 - APRIL 2020',
        description: 'Web Development, JavaScript Application',
        imageUrl: './assets/drawing-canvas.png',
        deployUrl: 'https://drawing-canvas-sk17.herokuapp.com/',
        githubUrl: 'https://github.com/shashwatkathuria/Drawing-Canvas'
      }, {
        title: 'Social Cloud',
        description: 'Web Development',
        imageUrl: './assets/social-cloud.png',
        deployUrl: 'https://social-cloud-sk17.herokuapp.com/',
        githubUrl: 'https://github.com/shashwatkathuria/SocialCloud',
      } , {
        title: 'Intelligent Traffic Monitoring System',
        description: 'Internet of Things (IoT), Raspberry Pi',
        imageUrl: './assets/intelligent-traffic-monitoring-system.jpg',
        videosUrl: 'https://drive.google.com/drive/folders/1FZ8eTLNpNaGGvW1qC6BvRbPIQPkGrD3P?usp=sharing',
        githubUrl: 'https://github.com/shashwatkathuria/IoT-TrafficMonitoringSystem'
      }, {
        title: 'Traffic Penalty System',
        description: 'Web Development',
        imageUrl: './assets/traffic-penalty-system.png',
        deployUrl: 'https://traffic-penalty-system-sk17.herokuapp.com/',
        videosUrl: 'https://drive.google.com/drive/folders/1FZ8eTLNpNaGGvW1qC6BvRbPIQPkGrD3P?usp=sharing',
        githubUrl: 'https://github.com/shashwatkathuria/Traffic-Penalty-System'
      }, {
        title: 'Serverless Chat Application',
        description: 'Serverless Computing, Web Development',
        imageUrl: './assets/serverless-chat-app.png',
        deployUrl: 'http://iitj-serverless-chat-app.s3-website-us-east-1.amazonaws.com/',
        githubUrl: 'https://github.com/shashwatkathuria/Serverless-Chat-Application',
      }, {
        title: 'IITJ HealthCare',
        description: 'Software Engineering, Web Development',
        imageUrl: './assets/iitj-healthcare.png',
        videosUrl: 'https://drive.google.com/open?id=1gLBj9akrKigSoae0Vlbf7UVykw1XdBpU',
        deployUrl: 'https://iitj-healthcare-sk17.herokuapp.com/',
        githubUrl: 'https://github.com/shashwatkathuria/IITJHealthCare-Project',
      }, {
        title: 'Flappy Bird',
        description: '2D Game Development',
        imageUrl: './assets/flappy-bird.png',
        githubUrl: 'https://github.com/shashwatkathuria/FlappyBird-GameDevelopment',
      }, {
        title: 'Pong',
        description: '2D Game Development',
        imageUrl: './assets/pong.png',
        githubUrl: 'https://github.com/shashwatkathuria/Pong-GameDevelopment',
      }, {
        title: 'Data Structures & Algorithms',
        description: 'Python, C, C++',
        imageUrl: './assets/data-structures-and-algorithms.png',
        githubUrl: 'https://github.com/shashwatkathuria/Data-Structures-And-Algorithms'

      }, {
        title: 'Cryptography',
        description: 'Python, C',
        imageUrl: './assets/cryptography.png',
        githubUrl: 'https://github.com/shashwatkathuria/Cryptography'
      }, {
        title: 'Part of Speech Tagging',
        description: 'Natural Language Processing, Machine Learning',
        imageUrl: './assets/nlp-hindi-english.png',
        githubUrl: 'https://github.com/shashwatkathuria/NLP-Hindi-English'
      }, {
        title: 'Drag v/s Normal Projectile',
        description: 'Python, PyLab',
        imageUrl: './assets/drag-vs-normal-projectile.png',
        githubUrl: 'https://github.com/shashwatkathuria/Drag-vs-Normal-Projectile-Python-Project'
      }, {
        title: 'Disaster Safety Android Application',
        description: 'Android App Development, Android Studio',
        imageUrl: './assets/disaster-safety-android-app.png',
        githubUrl: 'https://github.com/shashwatkathuria/Disaster-Safety-Android-App'
      }, {
        title: 'Disaster Safety Web Application',
        description: 'Web Development',
        imageUrl: './assets/disaster-safety-web-app.png',
        githubUrl: 'https://github.com/shashwatkathuria/Disaster-Safety-Web-App'
      }, {
        title: 'Garage StopLight',
        description: 'Raspberry Pi',
        imageUrl: './assets/garage-stoplight.jpg',
        videosUrl: 'https://drive.google.com/file/d/1_0aMo8JK-ID4sapZwSpQlNWzwN5iqD44/view?usp=sharing',
        githubUrl: 'https://github.com/shashwatkathuria/Garage-StopLight-Project'
      }
    ];
  }

  render() {
    return (
      <div class='project-section'>
        <h1 class='section-title'>Projects</h1>
        <div class='horizontal-line'></div>
        <div class="project-cards">
          { this.projects.map(projectData => <ProjectCard data={projectData}/> )}
        </div>
      </div>
    );
  }

}
