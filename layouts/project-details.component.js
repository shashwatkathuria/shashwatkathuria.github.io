'use strict';

angular.
  module('portfolioApp').
  component('projectDetails', {
    templateUrl:'./phone-list.template.html',
    controller: function ProjectDetailsController() {
      this.projects = [
        {
          title: 'Social Cloud',
          time: 'SEPTEMBER 2019 - JANUARY 2020',
          areas: 'Web Development, JavaScript Application',
          GitHubLink: 'https://github.com/shashwatkathuria/SocialCloud',
          HerokuLink: 'https://social-cloud-sk17.herokuapp.com/'
        }, {
          title: 'Garage StopLight',
          time: 'MARCH 2019',
          areas: 'Raspberry Pi',
          GitHubLink: 'https://github.com/shashwatkathuria/Garage-StopLight-Project',
        }, {
          title: 'Flappy Bird',
          time: 'JULY 2019 - AUGUST 2019',
          areas: 'Game Development',
          GitHubLink: 'https://github.com/shashwatkathuria/FlappyBird-GameDevelopment',
        }, {
          title: 'Drawing Canvas',
          time: 'MAY 2019 - JULY 2019',
          areas: 'Web Development, JavaScript Application',
          GitHubLink: 'https://github.com/shashwatkathuria/Drawing-Canvas',
          HerokuLink: 'https://drawing-canvas-sk17.herokuapp.com/'
        }, {
          title: 'Pong',
          time: 'JUNE 2019 - AUGUST 2019',
          areas: 'Game Development',
          GitHubLink: 'https://github.com/shashwatkathuria/Pong-GameDevelopment',
        }, {
          title: 'Natural Language Processing - Part of Speech Tagging',
          time: 'MARCH 2019 - MAY 2019',
          areas: 'Machine Learning',
          GitHubLink: 'https://github.com/shashwatkathuria/NLP-Hindi-English',
        }, {
          title: 'Data Structures & Algorithms',
          time: 'JUNE 2018 - PRESENT',
          areas: 'Programmed in Python, C++ & C',
          GitHubLink: 'https://github.com/shashwatkathuria/Data-Structures-And-Algorithms',
        }, {
          title: 'Cryptography',
          time: 'SEPTEMBER 2018 - JANUARY 2019',
          areas: 'Programmed in Python & C',
          GitHubLink: 'https://github.com/shashwatkathuria/Cryptography',
        }, {
          title: 'IITJ HealthCare',
          time: 'MAY 2019 - JULY 2019',
          areas: 'Software Engineering, Web Development',
          GitHubLink: 'https://github.com/shashwatkathuria/IITJHealthCare-Project',
          HerokuLink: 'https://iitj-healthcare-sk17.herokuapp.com/'
        }, {
          title: 'Disaster Safety App',
          time: 'OCTOBER 2018 - NOVEMBER 2018',
          areas: 'Android Application & Web Development',
          WebAppGitHubLink: 'https://github.com/shashwatkathuria/Disaster-Safety-Web-App',
          AndroidAppGitHubLink: 'https://github.com/shashwatkathuria/Disaster-Safety-Android-App'
        }, {
          title: 'Drag v/s Normal Projectile',
          time: 'FEBRUARY 2018',
          areas: 'Graphical Comparison',
          GitHubLink: 'https://github.com/shashwatkathuria/Drag-vs-Normal-Projectile-Python-Project',
        }
      ];
    }
  });
