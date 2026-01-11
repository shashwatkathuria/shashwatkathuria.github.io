/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shashwat Kathuria",
  title: "Hi, I'm Shashwat Kathuria",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building scalable systems across the full stack — from frontend and backend development to big data pipelines, cloud infrastructure, and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shashwatkathuria",
  linkedin: "https://www.linkedin.com/in/shashwat-kathuria-053796182/",
  gmail: "shashwatkathuria7@gmail.com",
  medium: "https://medium.com/@shashwatkathuria7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical skills",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Programming Languages ⚡"),
    emoji("C • C++ • C# • Python • Java • JavaScript • Scala • Ruby • Lua"),
    emoji("⚡ Web Development ⚡"),
    emoji("Django • Ruby on Rails • NodeJS • Flask • HTML • CSS • JavaScript • Bootstrap • Webpack • PostgreSQL • SQLite • MongoDB"),
    emoji("⚡ Mobile App Development ⚡"),
    emoji("Android Studio • React Native"),
    emoji("⚡ Big Data ⚡"),
    emoji("Apache Spark • Hadoop • Synapse • HDInsight • Azure Data Factory"),
    emoji("⚡ Utilities ⚡"),
    emoji("Git • Raspberry Pi • Microsoft Azure • Heroku • AWS • MongoDB Atlas • Microsoft Substrate"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology, Jodhpur",
      logo: require("./assets/images/iitjLogo.jpg"),
      subHeader: "B. Tech. in Computer Science and Engineering",
      duration: "2017 - 2021",
      desc: "CGPA: 8.89, Department Rank 3"
    },
    {
      schoolName: "G. D. Goenka Public School, Vasant Kunj, New Delhi",
      logo: require("./assets/images/gdgpsLogo.png"),
      subHeader: "Science Stream (PCM) with Computer Science",
      duration: "2003 - 2017",
      desc: "Class 10 (2015): CGPA 9.6 | Class 12 (2017): Percentage 96%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer 2",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "September 2023 – Present",
      desc: "Level 61, Level 62",
      descBullets: [
        "Built a large-scale big data platform called Score Data Lake from scratch to process massive audit and site data, with highly parallel, resource-efficient pipelines.",
        "Scaled governance reporting from 2 to 10+ reports, enabling multi-team access and growing the platform from 7K to 300K+ tenants.",
        "Designed and delivered an end-to-end Content Events system to detect malicious high-volume user activity, efficiently handling large datasets under tight resource constraints.",
        "Implemented using Apache Spark, Scala, SQL, Synapse, HDInsight, Azure Data Factory, Microsoft Substrate, Cosmos and C#."
      ]
    }, {
      role: "Software Engineer 1",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "June 2021 – September 2023",
      desc: "Level 59, Level 60",
      descBullets: [
        "Worked on backend, UI and joblets of data access governance section of SharePoint admin center website to compute and show reports related to sharing links of files and site sensitivity labels.",
        "Implemented using C#, ReactJS and Webpack."
      ]
    }, {
      role: "Software Engineer Intern",
      company: "Google",
      companylogo: require("./assets/images/gsocLogo.jpg"),
      date: "May 2020 – September 2020",
      desc: "Google Summer of Code | Wikimedia Foundation",
      descBullets: [
        "Developed an error tracking system, surfaced the errors to UI to keep users informed of update errors due to APIs, an orphan lock removal procedure from background jobs and made course data update process more efficient.",
        "Implemented using Ruby on Rails and ReactJS."
      ]
    }, {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "May 2020 – July 2020",
      desc: "Level 58",
      descBullets: [
        "Worked at Microsoft Garage and developed a full mobile news application for iOS and Android from scratch, which was featured at Microsoft Ignite and Hackathon.",
        "Implemented using React Native and integrated the application inside Microsoft Teams mobile application."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/social-cloud.png"),
      projectName: "Social Cloud",
      projectDesc: "Web Development",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://socialcloudsk17.azurewebsites.net/"
        }, {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/SocialCloud"
        }
      ]
    },
    {
      image: require("./assets/images/intelligent-traffic-monitoring-system.jpg"),
      projectName: "Intelligent Traffic Monitoring System",
      projectDesc: "Internet of Things (IoT), Raspberry Pi",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/IoT-TrafficMonitoringSystem"
        }
      ]
    }, {
      image: require("./assets/images/news-application.jpg"),
      projectName: "News Application",
      projectDesc: "Android App Development",
      footerLink: [
        {
          name: "Download Android APK",
          url: "https://drive.google.com/drive/folders/1ULdMWboHX8-ADvc4oID6I0YAxykESce6?usp=drive_link"
        }, {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/News-Application"
        }
      ]
    }, {
      image: require("./assets/images/nlp-hindi-english.png"),
      projectName: "Part of Speech Tagging",
      projectDesc: "Natural Language Processing, Machine Learning",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/NLP-Hindi-English"
        }
      ]
    }, {
      image: require("./assets/images/drawing-canvas.png"),
      projectName: "Drawing Canvas",
      projectDesc: "Web Development, JavaScript Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drawigncanvassk17.azurewebsites.net/"
        }, {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Drawing-Canvas"
        }
      ]
    }, {
      image: require("./assets/images/flappy-bird.png"),
      projectName: "Flappy Bird",
      projectDesc: "2D Game Development",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/FlappyBird-GameDevelopment"
        }
      ]
    }, {
      image: require("./assets/images/pong.png"),
      projectName: "Pong",
      projectDesc: "2D Game Development",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Pong-GameDevelopment"
        }
      ]
    }, {
      image: require("./assets/images/traffic-penalty-system.png"),
      projectName: "Traffic Penalty System",
      projectDesc: "Web Development",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://trafficpenaltysystemsk17.azurewebsites.net/"
        }, {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Pong-GameDevelopment"
        }
      ]
    }, {
      image: require("./assets/images/serverless-chat-app.png"),
      projectName: "Serverless Chat Application",
      projectDesc: "Serverless Computing, Web Development",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Serverless-Chat-Application"
        }
      ]
    }, {
      image: require("./assets/images/iitj-healthcare.png"),
      projectName: "IITJ HealthCare",
      projectDesc: "Software Engineering, Web Development",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://iitjhealthcaresk17.azurewebsites.net/"
        }, {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/IITJHealthCare-Project"
        }
      ]
    }, {
      image: require("./assets/images/cryptography.png"),
      projectName: "Cryptography",
      projectDesc: "Python, C",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Cryptography"
        }
      ]
    }, {
      image: require("./assets/images/data-structures-and-algorithms.png"),
      projectName: "Data Structures & Algorithms",
      projectDesc: "Python, C, C++",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Data-Structures-And-Algorithms"
        }
      ]
    }, {
      image: require("./assets/images/drag-vs-normal-projectile.png"),
      projectName: "Drag v/s Normal Projectile",
      projectDesc: "Python, C, C++",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Drag-vs-Normal-Projectile-Python-Project"
        }
      ]
    }, {
      image: require("./assets/images/disaster-safety-android-app.png"),
      projectName: "Disaster Safety Android Application",
      projectDesc: "Android App Development, Android Studio",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Disaster-Safety-Android-App"
        }
      ]
    }, {
      image: require("./assets/images/disaster-safety-web-app.png"),
      projectName: "Disaster Safety Web Application",
      projectDesc: "Web Development",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Disaster-Safety-Web-App"
        }
      ]
    }, {
      image: require("./assets/images/garage-stoplight.jpg"),
      projectName: "Garage StopLight",
      projectDesc: "Raspberry Pi",
      footerLink: [
        {
          name: "Demo Video",
          url: "https://drive.google.com/file/d/1_0aMo8JK-ID4sapZwSpQlNWzwN5iqD44/view?usp=sharing"
        }, {
          name: "GitHub Repository",
          url: "https://github.com/shashwatkathuria/Garage-StopLight-Project"
        }
      ]
    }, 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With love for developing cool stuff, I love to write and share with others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9971383462",
  email_address: "shashwatkathuria7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
